---
title: Rewriting my emacs new-post function as a shell script
date: 2025-08-16T13:32:44.000Z
slug: migrating-my-emacs-lisp-new-post-function-to-a-shell-script
categories:
  - ''
tags:
  - AI
  - Blogging
  - Hugo
summary: >-
  I wanted a more generic version of my emacs lisp function for creating new
  posts. Claude helped me write it.
---

**Spoiler and Content Warning**: Claude did it for me

I normally use a custom function in Emacs to create new posts here, but I'm in the mood for BBEdit today, so I wanted something more generic. I asked Claude to rewrite the function as a shell script (bash). It worked perfectly, first try. Scoff at this LLM stuff all you want, there's no denying that it can be incredibly useful. In this case, it was 10 minutes from idea to working code. Maybe I'll find bugs later, but Claude will fix them for me ;).

A gist of the script is [here](https://gist.github.com/jackbaty/374d87db086babc9dc19cf856bced4cc)

Here are Claude's comments:

----

Here's the bash script equivalent of your Emacs Lisp function! This script recreates all the key functionality:

**Key features:**

1. **Title input**: Can be provided as argument or prompted interactively
2. **Slug conversion**: Converts title to dashed-words format (lowercase, special chars become dashes)
3. **Bundle vs Single file**: Prompts whether to create a bundle (directory with index.md) or single .md file
4. **Directory structure**: Creates posts in `./content/posts/YYYY/MM/`
5. **File naming**: Uses `YYYY-MM-DD-slug` format
6. **Force overwrite**: Same safety features as the journal script
7. **Command line options**: Flags to skip prompts and force behavior

**Usage examples:**

```bash
# Interactive mode (prompts for title and bundle choice)
./hugo-post.sh

# Provide title, prompt for bundle choice
./hugo-post.sh "My Amazing Post"

# Force bundle creation
./hugo-post.sh -b "My Amazing Post"

# Force single file creation
./hugo-post.sh -s "My Amazing Post"

# Overwrite existing file
./hugo-post.sh -f "My Amazing Post"

# Combine flags
./hugo-post.sh -f -b "My Amazing Post"
```

**Command line options:**
- `-f, --force`: Overwrite existing files
- `-b, --bundle`: Create as bundle (directory + index.md)
- `-s, --single`: Create as single .md file
- `-h, --help`: Show usage help

The script handles the same logic as your Emacs function: it asks whether to make a bundle, creates the appropriate file structure, and generates the same frontmatter format.
