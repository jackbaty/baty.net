---
title: An improvement to org-goto from James Dyer
date: 2025-02-05T10:48:48.000Z
slug: an-improvement-to-org-goto-from-james-dyer
categories:
  - Tech
tags:
  - Emacs
---

I hesitate to use `org-goto` in my Org mode files because I find the UI for it to be confusing. In a recent post, [Streamlining Navigation in Org-Mode using an adapted org-goto](https://emacs.dyerdwelling.family/emacs/20241228131958-emacs--streamlining-navigation-in-org-mode/), James Dyer makes some nifty improvements. The TL;DR is this:

```emacs-lisp
(setq org-goto-interface 'outline-path-completionp)
(setq org-outline-path-complete-in-steps nil)
```

Now, the target list is a simple completion window showing the entire outline.

<figure><img src="/img/2025/org-jump-cover.png" alt=""></figure>
