// scripts/migrate.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, basename, extname } from "path";
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
  const d = new Date(dateVal);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
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

// ── Process a single .md file ──────────────────────────────────

function processFile(srcPath, destTypeDir) {
  const raw = readFileSync(srcPath, "utf-8");
  const isToml = raw.startsWith("+++");
  const { data: fm, content } = matter(raw, {
    engines: { toml: TOML.parse.bind(TOML) },
    ...(isToml ? { language: "toml", delimiters: "+++" } : {}),
  });

  if (!fm.date || !fm.slug) {
    console.warn(`  SKIP (no date/slug): ${srcPath}`);
    return;
  }

  const year = yearFromPath(srcPath);
  const prefix = datePrefix(fm.date);

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
