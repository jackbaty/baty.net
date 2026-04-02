---
title: 'Testing content migration from Hugo, just in case'
slug: testing-content-migration-from-hugo-just-in-case
date: 2026-02-08T14:04:00.000Z
status: published
tags:
  - Blogging
  - Pure Blog
description: null
---

Just to be clear, I don't have serious plans to migrate my main Baty.net (Hugo) blog to Pure Blog. That doesn't mean I won't explore the "But what if I converted baty.net to Pure Blog?" scenario.

Things will be wonky while I tinker. Probably don't link to anything here, since I'm almost certain the links will break.

Some things I've noticed:

- Date formats in YAML are inconsistent with different SSGs. For example, Hugo wants `date: 2026-02-05 05:29:52 -0500` and Pure Blog uses `date: 2026-02-07 16:25` which throws an error in Hugo. Adding seconds to the date fixes it.
- Quoted strings in YAML front matter are optional. Many of my Hugo posts do quote the title: attribute using either single or double quotes. Would need to be removed, because in Pure Blog, those quotes are included as part of the title, etc. Same goes for tags: ["Tag1","Tag2"] vs [Tag1,Tag2].
