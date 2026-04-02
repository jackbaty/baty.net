---
title: Zoxide and Fish Shell
date: 2025-02-02T11:47:14.000Z
slug: zoxide-and-fish-shell
categories:
  - Software
tags:
  - CLI
  - Fish
---

I'm happy using [Fish](http://fishshell.com) for my shell. One thing I'd not gotten around to after switching is finding a good directory jumper. The original `z` doesn't work well with Fish. I used to use `fasd` and `autojump`, but thought I'd look around for something new.

For some reason, I'd never heard of [zoxide: A smarter cd command](https://github.com/ajeetdsouza/zoxide). Combined with [zoxide.fish: Tab completion and initialization for zoxide in fish shell](https://github.com/icezyclon/zoxide.fish), zoxide does the job nicely.

<!--more-->

Installing zoxide on macOS is simple: `brew install zoxide`.

Then I installed zoxide.fish using [Fisher](https://github.com/jorgebucaran/fisher). `fisher install icezyclon/zoxide.fish`.

zoxide.fish automatically aliases `cd` as `z` so my muscle memory is still useful.

That's it. Now I can more easily jump around the file system in a terminal.

