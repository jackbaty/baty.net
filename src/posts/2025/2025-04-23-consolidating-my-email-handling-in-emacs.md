---
title: Consolidating my email handling in Emacs
date: 2025-04-23T19:53:05.000Z
slug: consolidating-my-email-handling-in-emacs
categories:
  - ''
tags:
  - Emacs
  - Email
  - Gnus
summary: null
---

If I were to only have one computer, I’d use notmuch for email in Emacs. I might also import non-email stuff as notmuch messages so I can search everything in one place.

But, I now have 3 computers; 2 running macOS and one running (Fedora) Linux. Notmuch takes too much of my energy to keep synced between machines. So what about Mu4e? Mu4e is probably the “nicest” Emacs package for managing email, but it still requires a local synced copy of all my messages. This means configuring mbsync on all machines, etc.

It’s a lot, so I’ve decided to “simplify” things and use Gnus exclusively for email in Emacs. Gnus is weird and hard to get ones head around, but it’s built-in and it only requires a ~/.gnus.el file on each machine. Gnus works directly with my email service's IMAP back end, so everything is the same everywhere, without having to think about it.

I don’t get the fancy search features of notmuch, and I don’t get an offline copy of my email store. Honestly, having local email is one of those "but what if...?" things that never need an answer.

With Gnus, I get fewer dependencies and not nearly as many “How do I keep this all in order?” issues.
