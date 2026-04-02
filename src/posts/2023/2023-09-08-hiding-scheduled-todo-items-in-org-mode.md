---
title: Hiding scheduled TODO items in Org-mode
date: 2023-09-08T13:29:02.000Z
slug: hiding-scheduled-todo-items-in-org-mode
categories:
  - Emacs
tags:
  - ''
summary: null
draft: false
---

Many of my TODO items in Org-mode include a SCHEDULED property, which lets me ignore them until a specified date in the future. This keeps my Org agenda nice and tidy.

Something that always bugged me is that this worked fine in the Agenda, but not the global TODO list. It finally bothered me enough that I went looking for a solution, which I found in like twenty seconds:

`(setq org-agenda-tags-todo-honor-ignore-options t)`

Now, my global TODO lists don’t include future items. This is great.

One other thing I learned is that some of the ignore options take a numeric value. This means that I can set `org-agenda-todo-ignore-deadlines` to something like 7 and those items with a deadline more than a week out, don’t show up in global TODO lists.

```emacs-lisp
    org-agenda-skip-scheduled-if-done t
    org-agenda-skip-deadline-if-done t
    org-agenda-todo-ignore-scheduled 'future
    org-agenda-todo-ignore-deadlines 7
```

Org-mode is cool.
