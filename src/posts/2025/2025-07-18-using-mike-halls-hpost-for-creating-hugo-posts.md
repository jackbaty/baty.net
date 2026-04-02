---
title: Creating Hugo posts using hpost (from Mike Hall)
date: 2025-07-18T10:50:54.000Z
categories: []
tags:
  - Blogging
  - Hugo
summary: ''
slug: using-mike-halls-hpost-for-creating-hugo-posts
---

Creating a new blog post for Hugo couldn't be simpler. One simply creates a new Markdown file in the correct folder, making sure it contains the proper YAML front matter, and...OK, it's not _that_ simple.

Normally I use a small lisp function in Emacs for creating posts, but that doesn't help me on days that I don't feel like using Emacs[^1]. 

Another option would be to use the built-in hugo commands, but for some reason I never think of that. Probably because it requires that I `cd` to the right place and tell it what to name the file.

[Mike Hall](https://mike.puddingtime.org) recently published an update to the Ruby script he uses. It's called [hpost](https://github.com/mph-llm-experiments/hpost).

I used hpost to create this post. Worked fine, but made me think about how I might do it, given some private time with Claude.

- I wouldn't use Ruby. It's a nice language, but dependencies and version management confound me. Same with Python. I bet it could be done using bash. Or maybe Go, which would be Hugo-appropriate.
- New posts would go in dated folders (e.g. /posts/2025/07/my-new-post.md)
- I'd offer a choice to use a Hugo bundle (/my-post/index.md vs my-post.md) to make it easier to include images.
- Including a `slug:` entry in the front matter would be nice for maintaining URL consistency in case of title changes.
- Daily Notes would have to conform to my own conventions (/journal/2025/07-july/20250718/index.md)

What I'll likely do in real life is to continue using Emacs for creating posts. I've got Dired bookmarks for getting to previous posts, dwim commands for building/deploying, etc. hpost (or equivalent) is still nice for days like today when I'm off Emacs.


[^1]: Rare, but it happens.
