---
title: Finding Howm notes with Org-node
date: 2025-12-10T16:43:14.000Z
slug: finding-howm-notes-with-org-node
tags:
  - emacs
---

As a huge fan of [Denote](https://github.com/protesilaos/denote), I still sometimes dabble with other ways of taking notes in Emacs.

For example, I like the way [Howm](https://github.com/kaorahi/howm) does notes. I have a growing set of Howm notes, but they feel isolated from my other notes. For a while, I tried keeping [Denote and Howm together](https://baty.net/posts/2025/03/denote-and-howm-sitting-in-a-tree/#:~:text=howm) but it felt like swimming upstream. I bailed on that and broke them apart again.

More recently, I [learned about](https://baty.blog/2025/09/09/orgnode.html) an Org-roam-alike called [Org-node](https://github.com/meedstrom/org-node). I like org-node quite a lot. There are no enforced file name rules, as in Denote. Any Org-mode heading or file can be a node. All one needs to do is give it an ID property. It's very fast at finding notes. I pointed org-node at my entire ~/org directory. Finding a node is still basically instant.

This got me thinking about Howm again. If I were to add an ID to new Howm notes, I could browse them in the cool, modified-date way that Howm uses, while also making them linkable/searchable with org-node. It doesn't matter where the files are within ~/org. Another advantage is that org-node uses the more standard `[id: ]` linking method rather than Denote's `[denote: ] ` links.

To make this easy, I added a hook in the `use-package` configuration for Howm, like so...

```lisp
:hook
  ((howm-mode . howm-mode-set-buffer-name)
   (howm-create . org-node-nodeify-entry)  ;; <-- add to org-node
   (org-mode . howm-mode))
```

That's it. With that hook, new Howm notes automatically call `org-node-nodeify-entry`, which does the right thing. with the file's front matter. I'm going to try this for a while and see how it goes.
