---
title: Using both Denote and Org-roam
date: 2023-08-20T16:15:01.000Z
slug: using-both-denote-and-org-roam
tags:
  - emacs
summary: 'Using both Denote and Org-roam packages seems crazy, but I''m trying it.'
---

[Denote](https://protesilaos.com/emacs/denote) and [Org-roam](https://orgroam.com) are both great Emacs packages for taking notes. I've used each of them extensively and have [waffled between them](/posts/2023/back-to-org-roam/) regularly. I started wondering if it makes sense to use _both_. It does!.

Denote's claim to fame is simplicity and structured file naming. Org-roam is great for daily notes, heading-level linking, and the cool visual graph.

I've sometimes felt (probably irrationally) icky about using Org-roam because of its dependency on external sqlite libraries. Now, with Emacs 29+, sqlite is built in, so I feel better about it.

What I wanted was Org-roam's features with Denote's naming conventions, so I installed both packages. The trick to making it seamless was to adjust the default Org-roam template so that it creates files with the proper names. Here's how I've done that.

``` lisp
(setq org-roam-capture-templates
        '(("d" "default" plain "%?"
           :target
           (file+head "%<%Y%m%dT%H%M%S>--${slug}.org" ":PROPERTIES:\n:ID:          %<%Y%m%dT%H%M%S>\n:END:\n#+title:      ${title}\n#+date:       [%<%Y-%m-%d %a %H:%S>]\n#+filetags: \n#+identifier: %<%Y%m%dT%H%M%S>\n\n")
           :immediate-finish t
           :unnarrowed t)))
```

I had been using GUIDs for the ID: property but here I've switched to IDs based on datestamps so they match the "identifier". I'm not sure this is a great idea. You may also notice that I'm not bothering with tagging here. I don't always use tags, anyway, so I don't feel the need to complicate the capture process. Besides, when I do want to add tags I can use `denote-keywords-add` and Denote adds to the filetags property and updates the filename automatically. This is one of the nice things about having both packages available.

If I want to rename/tag a bunch of files at once, I can use the `denote-dired-*` commands. Any time the database gets out of whack when doing this, I just run `org-roam-db-sync` and we're back in action.

One other bonus is that all of my original Denote links (e.g. denote:ABC123) still work so I haven't bothered converting everything to use Org's id: style links. In order to include my Denote files in Org-roam's database, I did need to add an ID: property to the top of each of them. Fortunately, I use the ID property for org-download/org-attach so most of them already had IDs.

Using both Denote and Org-roam seems to be working fine. Am I missing anything that might cause issues later?

