---
name: baty.net
description: Jack Baty's personal site — journal, notes, photographs, and writing set like a printed book.
colors:
  bg: "#fafaf8"
  surface: "#ffffff"
  border: "#e5e5e3"
  text: "#1a1a18"
  text-muted: "#6b6b68"
  code-bg: "#f3f4f6"
  accent: "oklch(0.52 0.12 65)"
  accent-soft: "oklch(0.96 0.03 70)"
  bg-dark: "#141412"
  surface-dark: "#1e1e1c"
  border-dark: "#2e2e2b"
  text-dark: "#e8e8e4"
  text-muted-dark: "#888884"
  code-bg-dark: "#252523"
  accent-dark: "oklch(0.75 0.13 70)"
  accent-soft-dark: "oklch(0.22 0.04 65)"
typography:
  display:
    fontFamily: "Vollkorn, Georgia, 'Times New Roman', serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Vollkorn, Georgia, 'Times New Roman', serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Vollkorn, Georgia, 'Times New Roman', serif"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  subhead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  meta:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
  mono:
    fontFamily: "'SF Mono', 'Fira Code', Consolas, monospace"
    fontSize: "0.875em"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
  xl: "3rem"
  "2xl": "5rem"
components:
  tag:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 0.5rem"
  callout:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.text}"
    typography: "{typography.meta}"
    rounded: "{rounded.md}"
    padding: "2rem"
  status:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.text-muted}"
    typography: "{typography.meta}"
    rounded: "{rounded.sm}"
    padding: "0.25rem 1rem"
  post-nav-tile:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    typography: "{typography.meta}"
    rounded: "{rounded.md}"
    padding: "1rem"
  site-nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
  back-link:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    typography: "{typography.meta}"
  inline-code:
    backgroundColor: "{colors.code-bg}"
    textColor: "{colors.text}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: "2px 5px"
  code-block:
    backgroundColor: "{colors.code-bg}"
    textColor: "{colors.text}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: "2rem"
---

# Design System: baty.net

## 1. Overview

**Creative North Star: "The Printed Journal"**

baty.net is set like a small-format hardcover: warm off-white pages, a humanist sans-serif body under serif titles, deliberate margins, and a single hand-mixed accent the color of old ink. The system is light-first; the dark mode is a faithful night-table version of the same book, never a separate identity. Decoration is rationed — when a flourish appears (a `✦` between entries, a floating quote glyph, an amber tag) it is the only flourish on the page.

The site rejects the visual vocabulary of tech blogs, SaaS marketing, and AI-generated dashboards. There are no gradients, no glass surfaces, no hero-metric tiles, no card grids of identical icon-and-heading boxes, no neon-on-black. Photographs and prose are the content; everything else steps aside.

**Key Characteristics:**
- Light-first, warm off-white (`#fafaf8`) — never `#fff`.
- One accent in the warm-amber/honey family, used on ≤10% of any page.
- Humanist sans-serif body (Instrument Sans) paired with a clean grotesque (Hanken Grotesk) for chrome and metadata; Vollkorn reserved for titles and display.
- Generous reading measure (`68ch`) with a 1.6 line-height.
- A single ornament — `✦` — separates list items where a hairline would feel mechanical.

## 2. Colors: The Inked Paper Palette

A warm off-white surface with a soft black for text and one warm-amber accent. The neutrals are tinted, not gray — the page should feel like paper, not a screen.

### Primary

- **Inked Amber** (`oklch(0.52 0.12 65)`): The single accent. Used for links inside prose, the hover color on every interactive element, the leading `✦` glyph between post cards, and the floating opening-quote in blockquotes. In dark mode it lifts to `oklch(0.75 0.13 70)` so it stays warm without glowing.
- **Amber Tint** (`oklch(0.96 0.03 70)`): The pale-honey wash behind tags, callouts, and status blocks. The only "filled" surface in the system; everything else is paper.

### Neutral

- **Paper** (`#fafaf8`): Page background. The warmth (chroma toward 70°) is the whole point — `#fff` would feel clinical.
- **Surface** (`#ffffff`): Reserved for elements that must sit *above* the page (currently rare). Not the default background.
- **Soft Black** (`#1a1a18`): Body text. Not `#000`; the slight warm tint matches the paper.
- **Quiet Gray** (`#6b6b68`): Metadata, captions, muted footer text, dt labels.
- **Hairline** (`#e5e5e3`): Borders, dividers, the bottom of the site header. Always 1px.
- **Code Wash** (`#f3f4f6`): Background for inline code and `<pre>` blocks.

### Dark mode (faithful, not separate)

- bg `#141412` · text `#e8e8e4` · muted `#888884` · border `#2e2e2b` · accent `oklch(0.75 0.13 70)` · accent-soft `oklch(0.22 0.04 65)` · code-bg `#252523`.

### Named Rules

**The 10% Accent Rule.** The amber accent is rationed. It appears on links, the active hover state, the post-card `✦` separator, the floating quote glyph, and the tag pill. Adding it to a sixth surface dilutes it.

**The No-Pure-White, No-Pure-Black Rule.** `#fff` and `#000` are forbidden. Every neutral is tinted toward the paper hue. Use the tokens.

**The Tinted-Neutrals Rule.** Borders and dividers are 1px in `--color-border`, sometimes mixed at 50% via `color-mix(in oklch, var(--color-border) 50%, transparent)`. Never a colored stripe.

## 3. Typography

**Display Font:** Vollkorn (with Georgia, "Times New Roman", serif fallback)
**Body Font:** Instrument Sans (with system-ui fallback) — humanist sans-serif for prose. Warm and readable without the tech-blog associations of Inter or similar.
**UI / Label Font:** Hanken Grotesk (with system-ui, -apple-system fallback) — used only for chrome: navigation, metadata, captions, labels, callout body, code/pre.
**Mono Font:** SF Mono → Fira Code → Consolas.

**Character:** Vollkorn commands the titles and display; Instrument Sans carries the prose; Hanken Grotesk handles the margins (navigation, metadata, captions). The serif never appears in chrome; the grotesque never appears in body prose.

### Hierarchy

- **Display** (Vollkorn 600, `3rem`, line-height 1.15, letter-spacing `-0.02em`): Single-post title in the post header. One per page, never above the fold of an index.
- **Headline** (Vollkorn 600, `2.25rem`, line-height 1.2, letter-spacing `-0.02em`): Page titles on archive/tag pages.
- **Title** (Vollkorn 700, `1.75rem`, line-height 1.2, letter-spacing `-0.01em`): Post-card titles in lists; site title in the header.
- **Subhead** (Hanken Grotesk 700, `1.25rem`, letter-spacing `-0.02em`): `h3` inside body prose. The shift from Vollkorn body to Hanken subhead is the section break — no underline, no rule, no color.
- **H4** (Hanken Grotesk 700, `1.125rem`, **uppercase**, letter-spacing `0.04em`): Smallest body heading. Treated as a label, not a heading.
- **Body** (Instrument Sans 400, `1.125rem`, line-height 1.6): Prose. Capped at `68ch` via `--measure`. Mobile drops to `1rem`.
- **Meta** (Hanken Grotesk 400, `0.875rem`, muted): Dates, byline, archive timestamps, captions, callout body, tag-cloud links.
- **Label** (Hanken Grotesk 600, `0.7rem`, **uppercase**, letter-spacing `0.1em`): Site nav, page-label kicker, post-nav prev/next labels, archive year header.

### Named Rules

**The Serif-for-Titles Rule.** Vollkorn is for display, headlines, titles, post-card headings, archive links, and the blockquote ornament glyph. Instrument Sans carries body prose and blockquote text. Hanken Grotesk is for chrome only.

**The 68ch Rule.** Body paragraphs and figures cap at `var(--measure)` = `68ch`. Notes use a tighter `60ch`. Wider than 75ch breaks the bookish rhythm.

**The Uppercase-Label Rule.** Anything in uppercase uses Hanken Grotesk, weight 600, letter-spacing `0.1em` (or `0.05em` for the smallest variants). Uppercase serif is forbidden.

## 4. Elevation

Flat. The system uses no shadows anywhere — no `box-shadow` declarations exist in the stylesheet. Depth is conveyed by hairline borders (`1px solid var(--color-border)`), tonal contrast between paper and the amber tint, and generous whitespace. The lightbox `<dialog>` is the single exception: a near-opaque `rgba(0,0,0,0.85)` backdrop that overtakes the page entirely, not a shadow.

### Named Rules

**The Flat-Paper Rule.** Surfaces sit on the page, never above it. If you reach for `box-shadow`, you're solving the wrong problem — try a hairline, a tint, or more space.

**The Hairline-Only Rule.** All borders are `1px`. Sometimes mixed at 50% transparency via `color-mix`. Never a colored accent stripe (see Don'ts).

## 5. Components

### Site Header
A centered stack: 36×36px circular avatar, then the serif site title, then a horizontal nav of uppercase labels in Hanken Grotesk. Single hairline divides the header from the page. On mobile (≤600px) the avatar is hidden and the nav collapses to tighter gaps.

### Site Navigation Links
- **Style:** Hanken Grotesk 500, `0.7rem`, **uppercase**, letter-spacing `0.1em`, color `--color-text-muted`.
- **Hover:** color shifts to `--color-accent`, `0.15s` transition.
- **Active page** (`[aria-current="page"]`): color `--color-text`, weight 600. No underline, no pill.

### Post Cards (the signature pattern)
A vertical list of post cards (`.post-list`) separated by a hairline crossed by a single amber `✦` glyph centered on the line. The glyph sits in the bg color so it punches through the divider — a print-press ornament, not a chip.
- **Title** (`.post-card .post-title`): Vollkorn 700, `1.75rem`, color inherits, hover → accent.
- **Meta** below title: Hanken Grotesk small, muted.
- **Excerpt:** muted body color, capped at `68ch`.
- **Note variant** (`.post-card--note`): tighter gap, indented `2rem` from the left, smaller meta at 70% opacity, body capped at `60ch`. Distinguishes a "quick thought" from a full post without changing the overall rhythm.

### Tags (chips)
- **Style:** Inline-block, `0.75rem` Hanken Grotesk weight 600, **uppercase** with letter-spacing `0.05em`. Background `--color-accent-soft`, text `--color-accent`. `4px` radius. Padding `2px 0.5rem`. No border, no hover state.

### Callouts & Status Blocks
- **Callout:** `--color-accent-soft` background, `1px` border at 25% accent (via `color-mix`), `8px` radius, `2rem` internal padding. Hanken Grotesk body. Used sparingly for asides.
- **Status:** Smaller relative — `4px` radius, `0.25rem 1rem` padding, sits at the bottom of an entry as a quiet metadata strip with `<strong>` keys uppercased and tracked.

### Inputs / Fields
The site has no forms. If introduced, follow the same logic: hairline border, Paper background, no shadow, accent appears only on focus as a 1px border-color shift.

### Post Navigation (prev/next)
A two-column grid of bordered tiles. Each tile: hairline border, `8px` radius, `1rem` padding, label kicker in uppercase Hanken Grotesk, then the title in Vollkorn. Hover shifts border-color to accent. The "next" tile right-aligns its text. On mobile the grid collapses to a single column and right-alignment goes back to left.

### Blockquote
Italic Vollkorn, muted color, indented `3rem` from the left. A single oversized opening quote (`"`) in 2.5rem Vollkorn, accent color at 35% opacity, sits absolutely positioned at the left edge — the only ornament inside body prose.

### Code
- **Inline:** `--color-code-bg` background, `4px` radius, `2px 5px` padding, mono at `0.875em`.
- **Block (`<pre>`):** Same wash, `8px` radius, `1px` hairline border, `2rem` padding, capped at `68ch`, scrolls on x.

### Horizontal Rule
40% width, centered, `1px` top border at 50% transparency. A whisper, not a divide.

### Archive List & Tag Cloud
- **Archive** (`.post-archive`): Two-column flex per row — Vollkorn title (ellipsis on overflow) on the left, Hanken Grotesk timestamp on the right. Year header is a Hanken Grotesk uppercase label with a hairline underline.
- **Tag cloud:** 3 columns on desktop, 2 on mobile, Hanken Grotesk small. Count in muted color trails the link.

### Footer
Hairline divider, then a row of Hanken Grotesk small text and social icon links at 50% opacity → 100% on hover. No fill, no chip, no border.

### Lightbox
Native `<dialog>` element with a near-black backdrop (`rgba(0,0,0,0.85)`). Image inside is centered, max `90vw × 90vh`, `8px` radius, no border. Cursor `zoom-out` everywhere inside.

## 6. Do's and Don'ts

### Do:
- **Do** keep `#fff` out of the source. Page bg is `#fafaf8`; surface is white only when an element must sit above the page.
- **Do** ration the amber accent. If it's already on the link, the tag, the `✦`, the quote glyph, and the hover state — the sixth use is one too many.
- **Do** use Vollkorn for prose and Hanken Grotesk for chrome. Never mix them inside a single paragraph.
- **Do** cap reading measure at `68ch` via `var(--measure)` (or `60ch` for note variants).
- **Do** use the `✦` separator pattern between list items where a hairline alone would feel mechanical.
- **Do** prefer a hairline (`1px solid var(--color-border)`) or a tint (`--color-accent-soft`) over any new structural device.
- **Do** float small thumbnails right at `100×100`, with `shape-outside: border-box`. On ≤600px viewports they break out of the float and center.
- **Do** test every change in dark mode via `prefers-color-scheme`. Light is primary; dark must match the same restraint.

### Don't:
- **Don't** use `#fff` or `#000` anywhere. Every neutral is tinted toward the paper hue.
- **Don't** introduce a second accent. The system has one. If a state needs distinction, use weight, size, or muted color — not a new hue.
- **Don't** use gradients. Anywhere. Not in backgrounds, not in text, not on borders. (Pulled from PRODUCT.md: *"No gradients."*)
- **Don't** use side-stripe borders (`border-left` greater than 1px as a colored accent). The blockquote uses an absolutely-positioned glyph for the same purpose — copy that pattern.
- **Don't** use `box-shadow`. The system is flat. If you reach for elevation, the answer is more whitespace, a hairline, or a tint.
- **Don't** use glassmorphism, blur backdrops, or any "frosted" surface effect.
- **Don't** build hero-metric tiles, identical-card grids, or icon-headline-text card walls. (Pulled from PRODUCT.md: *"No dashboards."*)
- **Don't** build anything that reads as a tech blog, SaaS landing page, or "AI made this." (Pulled from PRODUCT.md anti-references: *"No cyan-on-dark. No corporate."*)
- **Don't** use uppercase serif. Uppercase is always Hanken Grotesk with letter-spacing `0.05em`–`0.1em`.
- **Don't** use em dashes in copy. Use commas, colons, semicolons, or parentheses.
- **Don't** add a CSS framework, utility-class layer, or component runtime. The single `styles.css` is the system.
- **Don't** let chrome compete with photographs. When an image is present in a post, surrounding elements step back: muted captions, no decorative borders, tighter spacing above and below the figure.
