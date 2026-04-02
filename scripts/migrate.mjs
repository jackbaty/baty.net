// scripts/migrate.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname, basename, extname } from "path";
import matter from "gray-matter";
import TOML from "@iarna/toml";

const HUGO = "hugo-examples";
const SRC = "src";
const IMG_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif"]);

// ── Helpers ────────────────────────────────────────────────────

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...walk(full));
    else results.push(full);
  }
  return results;
}

function yearFromPath(filePath) {
  const m = filePath.match(/[/\\](\d{4})[/\\]/);
  return m ? m[1] : "2026";
}

function datePrefix(dateVal) {
  // Use UTC methods so date-only values (stored as UTC midnight) don't shift by one day
  // in negative-offset timezones (EDT, EST, etc.)
  const d = new Date(dateVal);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// Convert {{< figure src="x" alt="y" caption="z" >}} to <figure>…</figure>
function convertFigures(content, year) {
  return content.replace(/\{\{<\s*figure\s+([\s\S]*?)>\}\}/g, (_, attrs) => {
    const get = (key) => {
      const m = attrs.match(new RegExp(`${key}=["']([^"']+)["']`));
      return m ? m[1] : "";
    };
    const src = get("src");
    const alt = get("alt");
    const caption = get("caption");
    const imgSrc = src && !src.startsWith("/") ? `/img/${year}/${src}` : src;
    const cap = caption ? `<figcaption>${caption}</figcaption>` : "";
    return `<figure><img src="${imgSrc}" alt="${alt}">${cap}</figure>`;
  });
}

// Update bare Markdown image paths: ![alt](filename.ext) → ![alt](/img/YYYY/filename.ext)
function updateImagePaths(content, year) {
  return content.replace(
    /!\[([^\]]*)\]\((?!\/|https?:\/\/)([^)]+)\)/g,
    (_, alt, src) => `![${alt}](/img/${year}/${src})`
  );
}

// Derive a slug from the file path when front matter doesn't provide one.
// For page bundles (index.md), use the parent directory name.
// For flat files, use the filename stem.
// In both cases, strip a leading YYYY-MM-DD- or YYYYMMDD- date prefix.
function slugFromPath(filePath) {
  const name =
    basename(filePath) === "index.md"
      ? basename(dirname(filePath))
      : basename(filePath, ".md");
  return name.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/^\d{8}[-_]/, "");
}

// ── Process a single .md file ──────────────────────────────────

function processFile(srcPath, destTypeDir) {
  // Skip Hugo section index files silently
  if (basename(srcPath) === "_index.md") return;

  const raw = readFileSync(srcPath, "utf-8");
  const isToml = raw.startsWith("+++");
  const { data: fm, content } = matter(raw, {
    engines: { toml: TOML.parse.bind(TOML) },
    ...(isToml ? { language: "toml", delimiters: "+++" } : {}),
  });

  // Normalize capital-D Date and capital-T Tags (older Hugo content)
  if (!fm.date && fm.Date) { fm.date = fm.Date; delete fm.Date; }
  if (!fm.tags && fm.Tags) { fm.tags = fm.Tags; delete fm.Tags; }

  // Derive slug from filename when missing or empty
  if (!fm.slug || (typeof fm.slug === "string" && !fm.slug.trim())) {
    if (fm.url) {
      // e.g. url: /2021/some-post/ → "some-post"
      fm.slug = fm.url.replace(/\/$/, "").split("/").pop();
    } else {
      fm.slug = slugFromPath(srcPath);
    }
  }

  // Sanitize: strip leading slashes and any path separators that would corrupt the output path
  if (typeof fm.slug === "string") {
    fm.slug = fm.slug.replace(/^\/+/, "").replace(/\//g, "-");
  }

  if (!fm.date) {
    console.warn(`  SKIP (no date): ${srcPath}`);
    return;
  }
  if (!fm.slug) {
    console.warn(`  SKIP (no slug): ${srcPath}`);
    return;
  }

  const year = yearFromPath(srcPath);
  const prefix = datePrefix(fm.date);

  // Replace non-unique placeholder slugs (e.g. Hugo's "today" convention for daily journals)
  // with the ISO date, guaranteeing uniqueness.
  if (fm.slug === "today" || fm.slug === "journal" || fm.slug === "note") {
    fm.slug = prefix;
  }

  // Normalize date to a JS Date so gray-matter serializes it as a proper YAML datetime
  fm.date = new Date(fm.date);

  // Front matter transforms
  if (fm.cover) {
    if (fm.cover.image) {
      const img = fm.cover.image;
      fm.cover.src = img.startsWith("/") ? img : `/img/${year}/${img}`;
      delete fm.cover.image;
    }
    delete fm.cover.relative;
  }
  delete fm.weather;

  // Content transforms
  let body = convertFigures(content, year);
  body = updateImagePaths(body, year);

  // Write output
  const destDir = join(destTypeDir, String(year));
  mkdirSync(destDir, { recursive: true });
  const destFile = join(destDir, `${prefix}-${fm.slug}.md`);
  writeFileSync(destFile, matter.stringify(body, fm));
  console.log(`  ${srcPath} → ${destFile}`);
}

// ── Copy images from Hugo page bundles ────────────────────────

function copyImages(hugoDir) {
  for (const file of walk(hugoDir)) {
    if (!IMG_EXTS.has(extname(file).toLowerCase())) continue;
    const year = yearFromPath(file);
    const destDir = join(SRC, "img", year);
    mkdirSync(destDir, { recursive: true });
    const dest = join(destDir, basename(file));
    if (!existsSync(dest)) {
      copyFileSync(file, dest);
      console.log(`  img: ${basename(file)} → src/img/${year}/`);
    }
  }
}

// ── Run ───────────────────────────────────────────────────────

console.log("Migrating posts...");
for (const f of walk(join(HUGO, "posts")).filter((f) => f.endsWith(".md"))) {
  processFile(f, join(SRC, "posts"));
}

console.log("Migrating journal...");
for (const f of walk(join(HUGO, "journal")).filter((f) => f.endsWith(".md"))) {
  processFile(f, join(SRC, "journal"));
}

console.log("Migrating notes...");
for (const f of walk(join(HUGO, "notes")).filter((f) => f.endsWith(".md"))) {
  processFile(f, join(SRC, "notes"));
}

console.log("Copying images...");
copyImages(HUGO);

console.log("Done.");
