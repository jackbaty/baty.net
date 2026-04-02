---
title: A new Notes section
date: 2025-05-29T15:36:05.000Z
slug: a-new-notes-section
categories:
  - Tech
tags:
  - Blogging
---

One of the reasons for my Ghost/ActivityPub experiment was to try to better integrate both short and long posts. Since [that didn't pan out](/posts/2025/05/what-happened-to-ghost/), I started thinking about how I might manage it with Hugo.

It turned out to be relatively easy. I added a /content/notes folder. Then I made a tweaked Hugo list template that doesn't render a title and instead displays the entire post content rather than just a summary. And finally, I added a custom RSS feed just for notes.

To create new notes I use a small Emacs lisp function I wrote which creates the proper folders and Markdown file and populates the YAML front matter. This makes posting quick notes quick and easy.

Here's the Notes page. [/notes](/notes).

Everything that goes in /notes is cross-posted to [Mastodon](https://social.lol/@jbaty) using [EchoFeed](https://echofeed.app). All in all, I like how it works.
