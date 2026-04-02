---
title: Listing today's notes in Denote journal entry
date: 2025-03-18T16:24:09.000Z
slug: listing-today's-notes-in-denote-journal-entry
categories:
  - Software
tags:
  - Emacs
  - Denote
summary: null
cover:
  image: null
  alt: null
  caption: null
---

While tinkering with Obsidian recently, something I liked was having a daily notes template with a Dataview query showing the other files I'd added that same day. I added something similar for Denote. It's a Yasnippet:

```
# -*- mode: snippet -*-
# name: Denote insert today's links
# key: dnl
# --

#+begin: denote-links :regexp "^`(format-time-string "%Y%m%d")`$0"
#+end
```

I just run that after first creating the daily note and I get a list of links to the other Denote files from that day. There's probably a way to automate that, but this is good enough for who it's for.
