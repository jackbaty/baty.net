---
title: "From web page to printable PDF for reading later"
date: 2026-05-03T09:06:57-0400
slug: from-web-page-to-nice-printable-pdf-for-reading-later
tags: []
cover:
  src: /img/2026/20260503-example-pdf.png
  alt: "Screenshot of PDF"
  caption: "Sample PDF output"
---

Rather than using a normal-person's "Read Later" service, I print long-form web articles for reading later. I print them, pile them up, and read them all when I have some time away from the computer. It's the only way I can truly pay attention to them.

The process took some work to dial in, but I've gotten it close to how I like it. It goes like this:

1. Save the page as Markdown using the [Obsidian Web Clipper](https://obsidian.md/clipper)
2. Convert the Markdown to PDF using [Pandoc](https://pandoc.org)
3. Print!


<!-- more -->

First, the Obsidian Web Clipper. I have a custom "template" configured for this. The template doesn't use Properties. I put the entire block of front matter into the Content field, using variables to insert the specifics, so no need to worry about the way the clipper renders properties...


```yaml
---
title: "{{title}}"
author: "{{author|safe_name}}"
source: {{url}}
created: {{date}}
published: {{published|date:"YYYY-MM-DD"}}
---

> ## Excerpt
> {{description}}

{{content}}
```

A copy of the template for importing directly into the web clipper is [here](https://static.baty.net/code/obsidia-web-clipper-for-pandoc.json)

The magic comes from Pandoc. I convert the Markdown to PDF via LaTeX. The `default.latex` template that ships with Pandoc works well. It uses all sorts of variables that can be passed in via YAML front matter or via a defaults file. I only just learned about the default file option, so that cleaned up the front matter dramatically. Here's my ~/.pandoc/defaults/article.yaml defaults file:

```yaml
pdf-engine: xelatex
template: ~/.pandoc/templates/default.latex

variables:
  documentclass: scrartcl
  mainfont: XCharter
  sansfont: Playfair Display
  linestretch: 1.15
  header-includes:
    - \setkomafont{title}{\sffamily\bfseries}
    - \setkomafont{section}{\sffamily\bfseries}
    - \setkomafont{subsection}{\sffamily\bfseries}
  classoption:
    - DIV=14
    - twocolumn 
```

This sets fonts, sizes, document class, etc. The `DIV=14` is new to me. With KOMA classes, it sets the text width, taking font size into account. This is easier than including specific geometry. Smaller numbers = narrower text. Drop the `twocolumn` line to print full-width.

I could create separate default files for different layouts and styles. Use the -d option, e.g. `pandoc -d article`. I might make one for use on the Remarkable tablet, which likes a larger font and wider body.

A shell script, `md2pdf.sh` does the conversion for me. The script used to be about 10 lines of sloppy bash with a bunch of stuff hard-coded. I had Claude help me make it more robust, and here's the latest version:

```bash
#!/bin/sh
set -eu

DEFAULT_DEFAULTS_FILE="$HOME/.pandoc/defaults/article.yaml"

usage() {
    cat >&2 <<EOF
Usage: $(basename "$0") [OPTIONS] FILE

Convert a Markdown file to PDF with pandoc and open it.

Options:
  -o DIR    Output directory (default: same directory as FILE)
  -d FILE   Pandoc defaults file (default: $DEFAULT_DEFAULTS_FILE)
  -n        Don't open the PDF after creating it
  -h        Show this help
EOF
    exit 1
}

output_dir=""
defaults_file="$DEFAULT_DEFAULTS_FILE"
open_after=1

while getopts "o:d:nh" opt; do
    case "$opt" in
        o) output_dir="$OPTARG" ;;
        d) defaults_file="$OPTARG" ;;
        n) open_after=0 ;;
        h) usage ;;
        *) usage ;;
    esac
done
shift $((OPTIND - 1))

[ $# -ge 1 ] || usage

input="$1"

if [ ! -f "$input" ]; then
    echo "Error: input file '$input' not found" >&2
    exit 1
fi

if [ ! -f "$defaults_file" ]; then
    echo "Error: defaults file '$defaults_file' not found" >&2
    exit 1
fi

# Default output dir to source dir
[ -n "$output_dir" ] || output_dir=$(dirname "$input")
mkdir -p "$output_dir"

stem=$(basename "$input")
stem="${stem%.*}"
output="$output_dir/$stem.pdf"

# Capture pandoc stderr so we can report it clearly on failure
log=$(mktemp)
trap 'rm -f "$log"' EXIT

if ! pandoc --defaults "$defaults_file" "$input" -o "$output" 2>"$log"; then
    echo "pandoc failed converting '$input'" >&2
    echo "----- pandoc output -----" >&2
    cat "$log" >&2
    echo "-------------------------" >&2
    echo "Command: pandoc --defaults '$defaults_file' '$input' -o '$output'" >&2
    exit 1
fi

# Surface warnings even on a successful run
[ -s "$log" ] && cat "$log" >&2

echo "Created: $output"

if [ "$open_after" -eq 1 ]; then
    xdg-open "$output" >/dev/null 2>&1 &
fi

```

So the simple version (assuming md2pdf.sh is in your path) is:

`md2pdf.sh my-article.md`

It's not quite cross-platform (e.g xdg-open on Linux vs open on macOS) but that shouldn't be to difficult to do.

This seems like a lot, but once it's in place it's a couple of clicks and a quick shell command.

Let me know if there's anything unclear or incorrect here. Or if you have suggestions for improvements.

