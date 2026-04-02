---
title: Global org-capture shortcut in KDE
date: 2026-02-05T10:29:52.000Z
slug: global-org-capture-shortcut-in-kde
categories:
  - ''
tags:
  - Linux
  - Emacs
summary: null
---

I like being able to create new Org mode tasks from anywhere, via a simple keyboard shortcut. This probably doesn't justify a whole post, but here's how I did it.

Create a script at ~/.local/bin/orgcapture.sh

Here's the script:

```sh
#!/bin/bash
emacsclient -c -F '((name . "capture") (width . 80) (height . 34))' -e '(progn (org-capture) (delete-other-windows))'
```

In my Emacs config, I have a hook that tidies up the new frame:

```lisp
(defun my/org-capture-finalize-hook ()
  "Close frame after org-capture if it was opened for capture."
  (when (and (> (length (frame-list)) 1)  ; More than one frame
             (frame-parameter nil 'client)) ; Frame created by emacsclient
    (delete-frame)))

(add-hook 'org-capture-after-finalize-hook 'my/org-capture-finalize-hook)
```


In KDE's Settings, I added a new command in the Shortcuts settings that point to that script. I assigned it to F3.

Now I hit F3 any time and a small capture buffer pops up in a new frame. That's it. If there's a better method for doing this, let me know.
