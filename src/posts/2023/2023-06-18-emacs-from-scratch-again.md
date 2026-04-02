---
title: Emacs from scratch (again)
summary: >-
  I've succumbed to the temptation to try building my Emacs config from scratch.
  We've been here before.
date: 2023-06-18T20:03:00.000Z
lastmod: 2023-06-18T20:08:36.000Z
slug: emacs-from-scratch-again
categories:
  - Emacs
draft: false
weight: 0
---

I've been fighting the urge to rebuild my Emacs configuration from scratch. Doom Emacs is powerful, complete, and offers all I might ever need, but I sometimes get twitchy around _relying_ on it. I'd like to free myself from its wrapper macros like `after!` and `map!` so that I remember how Emacs works by default. I like the SPC leader configuration in Doom, but I worry that my muscle memory will become useless one day. And Doom is _big_. It makes me feel like I'm dragging things around that I'll never need or want. This is more imagined than real, but it nags me.

Sometimes I want to feel closer to the tool.

I'm about four hours into it and it's not going great. Have you any idea how many quality-of-life improvements Doom includes? It's a lot, I'll tell you that.

I thought a starter kit would be helpful, so I tried the new beta of system crafters' [Crafted Emacs](https://github.com/SystemCrafters/crafted-emacs/tree/craftedv2beta). I don't think it's for me. Using custom.el for everything seems weird. Maybe I'll revisit once they're through the beta period.

My next step was to swipe some of Will Schenk's configuration from his post [Setting up emacs re-re-dux](https://willschenk.com/howto/2023/setting_up_emacs_reredux/#headline-1). Will's sensibilities seem to align pretty well with mine, so this was helpful. Also, he's using [NANO Emacs](https://github.com/rougier/nano-emacs), which gets me to a nice-looking and well-behaved setup without a ton of magic or unnecessary overhead.

&#x2026;another three hours later&#x2026;

I've pulled in the best parts of my Org-mode configuration, tweaked anything that depended upon Doom, and now I'm typing this.I haven't cursed in nearly an hour, so I must be getting closer. I still need to fix the feeling that I'm about to die by 1,000 cuts, but this is the first time I've done this and not gone crawling back to Doom within an hour or two. And I'm sorry if this seems shallow, but I think it's because NANO Emacs makes the whole thing look very nice.

Technically by using NANO Emacs as a crutch, I can't call it "from scratch" but it's the closest I've ever been to a non-Doom-mostly-hand-rolled config and I'm kind of excited about it.


[//]: # "Exported with love from a post written in Org mode"
[//]: # "- https://github.com/kaushalmodi/ox-hugo"
