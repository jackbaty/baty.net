---
title: Blogging with org-mode and ox-hugo again
summary: >-
  Using an SSG for building a blog isn't complicated enough, so I added a layer
  of Org mode atop mine.
date: 2026-01-21T09:55:00.000Z
lastmod: 2026-01-21T11:16:17.000Z
slug: blogging-with-org-mode-and-ox-hugo-again
tags:
  - blogging
  - hugo
  - orgmode
draft: false
weight: 0
---

For a few years (a few years ago) I wrote all my blog posts using one big Org mode outline and let [ox-hugo](https://ox-hugo.scripter.co/) generate the Markdown files for Hugo. I eventually decided it was a layer of abstraction that I didn't need, so I fell back to writing in Markdown directly.

I'm really into using Emacs for everything again (still?), so I dusted off and updated my old ox-hugo config and here I am, typing this with Emacs in a big Org mode outline.

I have a (ya)snippet for generating the posts, like so:

```text
# -*- mode: snippet -*-
# name: Hugo blog post
# key: blog
# uuid: blog
# --
**** TODO ${1:title}
:PROPERTIES:
:EXPORT_FILE_NAME: index.md
:EXPORT_HUGO_BUNDLE: `(format-time-string "%Y-%m-%d")`-${1:$(replace-regexp-in-string " " "-" (downcase yas-text))}
:EXPORT_HUGO_SLUG: ${1:$(replace-regexp-in-string " " "-" (downcase yas-text))}
:EXPORT_HUGO_CUSTOM_FRONT_MATTER: :coverCaption ""
:END:

#+begin_description

#+end_description

$0
```

The snippet prompts for a title, then creates the appropriate properties for the post.

One nice thing about this is that once the Markdown is generated, I no longer _need_ the .org file. Writing this way is a bonus, but not a requirement.
