import pluginRss from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";
import markdownItFootnote from "markdown-it-footnote";
import markdownItAttrs from "markdown-it-attrs";
import { createHash } from "crypto";
import { readFileSync } from "fs";

const isProd = process.env.NODE_ENV === "production";

export default function (eleventyConfig) {
  // ── Markdown ─────────────────────────────────────────────────
  const md = markdownIt({ html: true })
    .use(markdownItFootnote)
    .use(markdownItAttrs);
  eleventyConfig.setLibrary("md", md);

  // ── Cache busting ─────────────────────────────────────────────
  eleventyConfig.addGlobalData("cssHash", () => {
    const css = readFileSync("src/styles.css");
    return createHash("md5").update(css).digest("hex").slice(0, 8);
  });

  // ── Plugins ──────────────────────────────────────────────────
  eleventyConfig.addPlugin(pluginRss);

  // ── Passthrough ───────────────────────────────────────────────
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/img");

  // ── Filters ───────────────────────────────────────────────────
  eleventyConfig.addFilter("year", (date) =>
    new Date(date).getFullYear()
  );
  eleventyConfig.addFilter("month", (date) =>
    String(new Date(date).getMonth() + 1).padStart(2, "0")
  );
  eleventyConfig.addFilter("htmlDateString", (date) =>
    new Date(date).toISOString().split("T")[0]
  );
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric",
    })
  );
  eleventyConfig.addFilter("shortDate", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short", day: "numeric",
    })
  );
  eleventyConfig.addFilter("excerpt", (content) => {
    const idx = content.indexOf("<!-- more -->");
    return idx !== -1 ? content.slice(0, idx) : content;
  });
  eleventyConfig.addFilter("hasMore", (content) =>
    content.includes("<!-- more -->")
  );
  eleventyConfig.addFilter("filterByTag", (items, tag) => {
    const lower = tag.toLowerCase();
    return (items || []).filter((item) =>
      (item.data.tags || []).some((t) => t.toLowerCase() === lower)
    );
  });
  eleventyConfig.addFilter("head", (array, n) =>
    (array || []).slice(0, n)
  );

  // ── Collections ───────────────────────────────────────────────
  const noDrafts = (items) =>
    items.filter((item) => (isProd ? !item.data.draft : true));

  eleventyConfig.addCollection("posts", (api) =>
    noDrafts(api.getFilteredByTag("posts"))
      .sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("journal", (api) =>
    noDrafts(api.getFilteredByTag("journal"))
      .sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("notes", (api) =>
    noDrafts(api.getFilteredByTag("notes"))
      .sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("everything", (api) => {
    const all = [
      ...api.getFilteredByTag("posts"),
      ...api.getFilteredByTag("journal"),
      ...api.getFilteredByTag("notes"),
    ];
    return noDrafts(all).sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addCollection("tagList", (api) => {
    const system = new Set(["posts", "journal", "notes"]);
    const bySlug = new Map();
    api.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        if (!tag || system.has(tag)) return;
        const slug = tag.toLowerCase().replace(/\s+/g, "-");
        if (!bySlug.has(slug)) bySlug.set(slug, tag);
      });
    });
    return [...bySlug.values()].sort();
  });
  eleventyConfig.addCollection("tagCounts", (api) => {
    const system = new Set(["posts", "journal", "notes"]);
    const counts = new Map();
    const canonical = new Map();
    api.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        if (!tag || system.has(tag)) return;
        const slug = tag.toLowerCase().replace(/\s+/g, "-");
        if (!canonical.has(slug)) canonical.set(slug, tag);
        counts.set(slug, (counts.get(slug) || 0) + 1);
      });
    });
    return [...counts.entries()]
      .map(([slug, count]) => ({ tag: canonical.get(slug), slug, count }))
      .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
  });

  // ── Config ────────────────────────────────────────────────────
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
