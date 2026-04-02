---
title: A Doom Emacs status update after several days
date: 2024-11-05T11:32:51.000Z
slug: a-doom-emacs-status-update-after-several-days
categories:
  - ''
tags:
  - emacs
  - doom-emacs
summary: I've been back in Doom Emacs for a few days. This is how it's going.
cover:
  hidden: false
  caption: null
  src: /img/2024/doom.webp
---
  
Some quick notes on my move back to [Doom Emacs](https://github.com/doomemacs/doomemacs) after a few days.

After once again hitching my wagon to Doom Emacs, I have been both elated and frustrated. I'm elated because Doom adds so many nice little quality-of-life improvements that make using Emacs downright pleasant right out of the gate. On the other hand, it ruins a few things and sometimes breaks for no reason that I can understand. It's nice having someone maintain the basics of my config, but it's also frustrating when those someones do it "wrong". And sometimes running `./bin/doom upgrade` breaks things. I can usually recover, but don't love that I have to think about it. This is a side effect of having others do things for me, and it's a fair trade.

So far, I've resolved most of the little issues. One of those was with [Elfeed](https://github.com/skeeto/elfeed). Elfeed is unusable for me when using Doom's default configuration. Doom includes the elfeed-extras package, and I don't like it. The split window is annoying. What's worse is that there's no date column in the list of articles and there's no simple way to include it. That's just dumb, imo. So I disable that package and modify a few little things and it's much better.

The remaining problem is that I sync my entire .config/emacs and .config/doom directories, and this somehow breaks because Doom adds $TMPDIR to the .config/emacs/.local/env file. Apparently, my tmp directory is not the same on both the Mini and the MBP, so I get permissions errors every time I switch machines. The workaround is to run `./bin/doom env` before starting emacs when switching machines. That's not sustainable. I'll figure it out, but it's one thing that still bugs me.

And oh, the key bindings! Around six months ago, I moved back to my vanilla config and decided to stop using Evil mode. It was a painful transition, but I got used to it and now the stock key bindings feel normal. The problem was that I also use several tools that only offer Vim bindings. Switching between Emacs and Vim bindings has been chaotic, to say the least. I keep tripping over myself and there's been a lot of swearing. Going back to Doom and Evil mode has been tricky, but the muscle memory is returning, and I like the consistency in the apps I use most.

Something I dislike is using Doom's abstractions like `after!` and `map!`. It just makes things even less "normal". Handy, but it will make moving out of Doom harder. Not that I'd ever do that, though, right? 😆.

Right now, I'm happy with the setup. I love when Doom does something and it makes me say, "ooh, nice!". As long as that happens more often than me saying, "WTF?! That's dumb.", I should be fine in Doom.
