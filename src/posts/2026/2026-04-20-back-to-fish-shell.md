---
title: "Back to Fish Shell"
date: 2026-04-20T14:29:40-0400
slug: back-to-fish-shell
tags: [Software]
---

I tend to use [Fish Shell](https://fishshell.com/) for a while, then stop because of weird "non-POSIX" errors or something. 

After a while I forget that I had problems with Fish and decide to bring it back. I did that today, after ending up neck-deep in my .oh-my-zsh configuration. Fish does nearly everything I need right out of the box: really good completion, directory jumping (via `cdh`), abbreviations, etc. No plugins necessary.

One issue I've had is that I'd change my login shell to Fish and that can cause trouble. Instead, I added a line to my Ghostty config...

`command = /opt/homebrew/bin/fish`

This way, the login shell remains zsh but in Ghostty it's fish. So far it feels nice and clean.

