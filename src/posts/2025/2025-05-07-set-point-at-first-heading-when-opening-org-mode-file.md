---
title: Set point at first heading when opening Org mode file
date: 2025-05-07T09:40:07.000Z
slug: set-point-at-first-heading-when-opening-org-mode-file
categories:
  - ''
tags:
  - Tech
  - Emacs
summary: null
---

I recently discovered Org mode's [speed keys](https://orgmode.org/manual/Speed-Keys.html) option and it's pretty great. One caveat with speed keys is that they only work if the point is at the very beginning of a heading. To help with this, I (with Claude's help) created a small lisp function and hook to move the insertion point to the beginning of the first heading whenever I open an Org mode file. I'm recording it here in case it's useful to anyone else.

```emacs-lisp
(defun my/org-goto-first-heading ()
  "Move point to the beginning of the first heading in an org file."
  (when (eq major-mode 'org-mode)
    (goto-char (point-min))
    (if (re-search-forward "^\\*+ " nil t)
        (goto-char (match-beginning 0)))))

(add-hook 'org-mode-hook 'my/org-goto-first-heading)
```

I had to disable the saveplace package but I don't mind. This is better, since I don't often _want_ to return to where I was last editing a document. 

I wouldn't be shocked to learn that there's a simpler way to do this, but this works for now.
