#!/usr/bin/env bash
# new-content.sh — create posts, journal entries, and notes for baty.net (Eleventy)
#
# Usage:
#   ./new-content.sh post    — create a new post (prompts for title)
#   ./new-content.sh journal — create (or open) today's journal entry
#   ./new-content.sh note    — create a new note (prompts for title)

set -euo pipefail

NO_OPEN=0
TITLE=""
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# ── Date parts ────────────────────────────────────────────────────
YEAR=$(date +%Y)
MONTH=$(date +%m)
DAY=$(date +%d)
TODAY="$YEAR-$MONTH-$DAY"
NOW=$(date +"%Y-%m-%dT%H:%M:%S%z")

# Human-readable date for journal titles: "Thursday, April 2, 2026"
DOW=$(date +%A)
MONTH_NAME=$(date +%B)
TITLE_DAY=$(( 10#$DAY ))
JOURNAL_TITLE="$DOW, $MONTH_NAME $TITLE_DAY, $YEAR"

# ── Helpers ───────────────────────────────────────────────────────
slugify() {
  echo "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | tr -cs 'a-z0-9' '-' \
    | sed 's/^-//;s/-$//'
}

maybe_open() {
  local file="$1"
  if [ "$NO_OPEN" -eq 1 ]; then return; fi
  if [ -n "${EDITOR:-}" ]; then
    printf "Open in %s? [y/N] " "$EDITOR"
    read -r answer
    if [[ "${answer:-}" =~ ^[Yy]$ ]]; then
      eval "$EDITOR" '"$file"'
    fi
  fi
}

# ── Commands ──────────────────────────────────────────────────────
cmd_post() {
  if [ -n "$TITLE" ]; then
    title="$TITLE"
  else
    printf "Post title: "
    read -r title
  fi
  if [ -z "${title:-}" ]; then
    echo "Error: title is required." >&2
    exit 1
  fi

  local slug
  slug=$(slugify "$title")

  local posts_dir="$SCRIPT_DIR/src/posts/$YEAR"
  local post_file="$posts_dir/$TODAY-$slug.md"

  mkdir -p "$posts_dir"

  if [ -f "$post_file" ]; then
    echo "Post already exists: $post_file"
    maybe_open "$post_file"
    return
  fi

  cat > "$post_file" <<EOF
---
title: "$title"
date: $NOW
slug: $slug
tags: []
cover:
  src: ""
  alt: ""
  caption: ""
---

<!-- more -->
EOF

  echo "Created: $post_file"
  maybe_open "$post_file"
}

cmd_journal() {
  local journal_dir="$SCRIPT_DIR/src/journal/$YEAR"
  # Slug format matches existing files: DDMonYY (e.g. 02Apr26)
  local slug
  slug=$(date +"%d%b%y")
  local journal_file="$journal_dir/$TODAY-$slug.md"

  mkdir -p "$journal_dir"

  if [ -f "$journal_file" ]; then
    echo "Journal entry already exists: $journal_file"
    maybe_open "$journal_file"
    return
  fi

  cat > "$journal_file" <<EOF
---
title: "$JOURNAL_TITLE"
date: $NOW
slug: $slug
tags: []
summary: ""
cover:
  src: ""
  alt: ""
  caption: ""
---
EOF

  echo "Created: $journal_file"
  maybe_open "$journal_file"
}

cmd_note() {
  if [ -n "$TITLE" ]; then
    title="$TITLE"
  else
    printf "Note title (optional, Enter to skip): "
    read -r title
  fi

  local slug
  if [ -n "${title:-}" ]; then
    slug=$(slugify "$title")
  else
    slug=$(date +"%Y%m%d%H%M%S")
  fi

  local notes_dir="$SCRIPT_DIR/src/notes/$YEAR"
  local note_file="$notes_dir/$TODAY-$slug.md"

  mkdir -p "$notes_dir"

  if [ -n "${title:-}" ]; then
    cat > "$note_file" <<EOF
---
title: "$title"
date: $NOW
slug: $slug
tags: []
---
EOF
  else
    cat > "$note_file" <<EOF
---
date: $NOW
slug: $slug
tags: []
---
EOF
  fi

  echo "Created: $note_file"
  maybe_open "$note_file"
}

usage() {
  echo "Usage: $(basename "$0") <command> [options]"
  echo ""
  echo "  post     Create a new post"
  echo "  journal  Create (or open) today's journal entry"
  echo "  note     Create a new note"
  echo ""
  echo "Options:"
  echo "  --title=TITLE  Set title without prompting"
  echo "  --no-open      Don't offer to open in \$EDITOR"
  exit 1
}

# ── Dispatch ──────────────────────────────────────────────────────
args=()
for arg in "$@"; do
  case "$arg" in
    --no-open)   NO_OPEN=1 ;;
    --title=*)   TITLE="${arg#--title=}" ;;
    *)           args+=("$arg") ;;
  esac
done

case "${args[0]:-}" in
  post)    cmd_post ;;
  journal) cmd_journal ;;
  note)    cmd_note ;;
  *)       usage ;;
esac
