---
title: Into Doom and out again
date: 2024-07-07T17:01:04.000Z
tags:
  - Emacs
slug: into-doom-and-out-again
summary: null
cover:
  image: null
  hidden: false
---


[Doom Emacs](https://github.com/doomemacs/doomemacs) is pretty great, especially for former Vimmers. I lived in Doom for a long time because it makes so many little things nicer, without having to dedicate one's life to customizing Emacs.

Toward the end of last year I wrote [I'm Doomed again](/posts/2023/11/im-doomed-again) when I moved back from my vanilla config. Then, early this year, I rolled my own config again, and spent a lot of time getting things just so. I even removed Evil mode and have been using the usual Emacs bindings. It's the closest I've felt to being comfortable in Emacs in a long time.

Last week I was editing files on a server (via Vim) and I practically started the data center on fire because I had lost years of muscle memory around Vi bindings. Honestly, I miss modal editing.

My vanilla config takes around 4 seconds to launch. That's too long, but I didn't feel like figuring out how to optimize it. 

Between slow startup times and nostalgia for Vi bindings, I moved my config aside and re-installed Doom. That was so much fun! It lasted for maybe 10 minutes. I remembered how nice Doom was, but I also remembered that I dislike using Doom's built-in wrappers for things like use-package. I also don't like having to wrap my customizations in `(after! ...)` blocks so Doom doesn't steal them back.

I spent the time with it so that my stuff worked and Doom's stuff did its magic. Startup time just over one-half a second. Nice! But things were broken. I kept seeing little errors about Org-mode this or that. This could have been a load order thing and maybe I missed and `(after!` somewhere, but I didn't feel like dealing with it.

The novelty of using Doom wore off quickly and I'm now back to my custom config. I get mad at having to `C-c x` or `C-c c` all the time, but at least it all works my way again.

Now, the question is am I even going to continue using Emacs? I'm fun.
