---
title: Asking ChatGPT to do things I used to think were fun
date: 2024-08-29T10:28:59.000Z
slug: asking-chat-gpt-to-do-things-i-used-to-think-were-fun
categories:
  - Tech
tags:
  - Emacs
  - AI
summary: null
cover:
  hidden: true
  src: /img/2024/cover.jpg
---

I've been testing a version of [Johnny Decimal](https://johnnydecimal.com) using folders and org-mode files. While doing this, I found myself frequently wanting to create a new .org file in the current (Dired) directory with the same name as the directory (long story). 

In a past life, this would have been a fairly straightforward challenge. I'm not remotely fluent in (emacs) lisp, but I've always enjoyed learning, so I would have dug in and figured out how to write the function myself.

I don't feel like that person any more. I just wanted to _use_ the function and move on.

So, I asked ChatGPT to write one for me[^hypocrisy]

> Write an emacs lisp function to create a new org-mode buffer having the same name as its enclosing folder

It worked. First try. However, I wanted to also automatically save the buffer as an org-mode file with the new name, so I amended my prompt with...

> Add to the function so that it saves the new buffer using the buffer name into the current directory

And that also worked on the first try.

```lisp
(defun jab/create-and-save-org-buffer-same-as-current-folder ()
  "Create a new Org-mode buffer with the same name as the current folder and save it in the current directory."
  (interactive)
  (let* ((current-directory (file-name-directory (or buffer-file-name default-directory)))
         (folder-name (file-name-nondirectory (directory-file-name current-directory)))
         (file-path (expand-file-name (concat folder-name ".org") current-directory))
         (new-buffer (generate-new-buffer folder-name)))
    ;; Switch to the new buffer and set it to Org-mode
    (switch-to-buffer new-buffer)
    (org-mode)
    ;; Save the new buffer to the specified file path
    (set-visited-file-name file-path)
    (save-buffer)
    (message "Created and saved new Org buffer: %s" file-path)))
```

I ran this, and it did exactly what I wanted, so I added to my permanent configuration and moved on.

I kind of hate how well this works. It feels like I'm a lazy cheater and that I'm using a bunch of magic code to do stuff. Then again, I can now do things in a few minutes what might have taken hours before. I'm not _learning_, but at least I'm _doing_. I guess.


[^hypocrisy]: This seems to contradict my [recent whining](https://social.lol/@jbaty/113033303989799542), but in that post I meant generative AI for "creative" purposes so I feel consistent.


