---
title: Dropping back to Doom Emacs
date: 2026-01-06T18:04:52.000Z
slug: dropping-back-to-doom-emacs
categories:
  - ''
tags:
  - Emacs
summary: >-
  I haven't used Doom Emacs in a while. Thought I'd give it a spin. Besides, I
  still miss my vim bindings from back in the day. Evil mode to the rescue.
---

Weaning myself from Emacs is like a minor hobby for me. Or at least you'd think it was, based on how much time I spend on it. I've only ever succeeded once or twice, and only for a short time. There is simply nothing like Emacs and definitely nothing like Org mode. Besides, I have a decade of notes in there. Nearly every note-taking, text-editing problem I've ever run into has been solved either by me or someone else in Emacs. I'm comfy there.

And yet, last week I tried leaving Emacs again.

I was sucked in by the promise of Markdown being available and useful just about anywhere, with any modern tool. I was tired of C-x C-something for everything. For example, opening my Emacs bookmarks means `C-x r b` and for some reason I always have to look at the keyboard while typing it. Yes, yes, I can rebind it if it bugs me, but that's a can of worms I've regretted opening before.

It's possible that the thing I thought about most has been the native Emacs bindings in nearly every app on macOS and the fact that they're _not_ everywhere on Linux. Assuming I'll never be able to go all in with only macOS or Linux, I thought I might try covering more bases by switching to Evil mode in Emacs. True Vim bindings aren't always available, but most apps and CLI tools, etc can fake it pretty well. Vim can fake it pretty well, too, and I spend a lot of time there.

So I dug out my vanilla evil-mode config and went to town. I hated it immediately. Mine was a half-ass configuration I cobbled together from a bunch of blog/Reddit posts. It was inconsistent and broken in places.

You know what does Evil mode really well? [Doom Emacs](https://github.com/doomemacs/doomemacs).

So I spent a few hours this morning (re)installing Doom and migrating the important bits of my vanilla config over.

Doom tries to do too much, but it does a pretty good job of it. I'm modal-editing my way around everything and it's like coming home. I'm sure I'll start stubbing my toes on things at some point, but for now, the problems I traded for it are worth it.


