---
title: Mu4e transient menu
date: 2025-03-29T12:17:30.000Z
slug: mu4e-transient-menu
categories:
  - Software
tags:
  - Emacs
  - Email
  - Mu4e
---

I ran across something neat while reading the [Mu4e release notes](https://github.com/emacsmirror/mu4e/blob/507ea8e18e7b7960d91f88a87bcb9de4da806afe/NEWS.org#L760)

> A (experimental) “transient” menu has been added for mu4e. You can use it e.g., with something like:

```emacs-lisp
(require 'mu4e-transient)
(global-set-key (kbd "C-c m") #'mu4e-transient-menu)
```

It's very handy!
