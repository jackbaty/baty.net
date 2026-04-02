---
title: Toggle hidden files in Dired buffers
date: 2025-03-08T15:06:34.000Z
slug: toggle-hidden-files-in-dired-buffers
categories:
  - Software
tags:
  - Emacs
summary: >-
  On macOS, hitting CMD-Shift-. in Finder toggles the display of hidden (.dot)
  files. I wanted the same thing in Dired mode.
---

![emacs](/img/small/emacs.png#floatright)

The more time I spend in Emacs' Dired mode, the more I want to tweak things. I [wrote about a few of these](/posts/2024/09/tweaks-to-my-dired-config-in-emacs/) last year.

One other thing I wanted was to hide any hidden (.dot) files in Dired listings. The simplest way to do this would be to set `dired-listing-switches` from `-al`  to `-l` instead. But that would always hide them. I wanted to toggle them on and off, like I can in Finder on macOS using <kbd>CMD-Shift-.</kbd>.

I poked around the Emacs documentation and a handful of Reddit posts and cobbled together something that worked. I figured I might as well share it.  I assume there are smarter ways to do this, but here are the relevant bits from my config.

```emacs-lisp
(use-package dired
  :init
   (require 'dired-x) ;; I think this is required for dired-omit-mode

  :bind
  (:map dired-mode-map
	("s->" . dired-omit-mode)) ;; toggle using Command-Shift-.  same as macOS Finder

  :hook
  (dired-mode . (lambda () (dired-omit-mode))) ;; hide .dot files by default

  :config
  (setq dired-omit-files   ;; hide .dot files when in dired-omit-mode
      (concat dired-omit-files "\\|^\\..+$")))
```

This configuration means that every time I create a dired buffer, the .dot files are hidden. What I haven't figured out is how to toggle it globally. Sometimes I want to show hidden files by default instead, for a while. It's not hard to toggle them, but it would be nice to "turn them on" until I want to "turn them off" again. This works well enough for now, though.
