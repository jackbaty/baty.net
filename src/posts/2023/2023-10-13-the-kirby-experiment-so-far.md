---
title: The Kirby Experiment so far
date: 2023-10-13T10:01:48.000Z
tags:
  - Blogging
slug: the-kirby-experiment-so-far
summary: How long do we all think my Kirby experiment will last? It's a fair question.
---


I've been having a blast migrating this blog to <a href="https://getkirby.com">Kirby</a>. Setting up new software and learning what it can do is a lot of fun.

This post is mostly a quick summary of how I've found using Kirby so far.

First, I'm typing this in Kirby's "block" editor and I can't tell you how much more pleasant it is to work in than WordPress' Gutenberg editor. I assumed I'd always use the built-in Markdown block, but I find the basic text block is more than enough for most things. I also use the quote, list, image, gallery, and code blocks. I could even build my own custom blocks if I found a need. 

In fact, the entire panel is far nicer to use than the WordPress admin. It's clean, light, and fast. It looks like this...

<figure><img src="/img/2023/20231013-baty.net-panel.png" alt=""></figure>

Block content is stored in text files, but the blocks are encoded as JSON objects. This is great for machines, but not as good for people. And I'm struggling with that. Kirby uses text files as a database, which would normally mean I could grab Emacs and start writing. Except when using blocks it doesn't really work that way. Once I've committed to using the block editor, I'll *always* have to use the block editor. I'm nervous about that. It makes me twitchy, and I've no idea how I could change things later without losing data or at least being forced to translate everything somehow. Like I said, twitchy.

I started out with Kirby's "plainkit" starter kit, which includes only the underlying app. This was good for learning, but quickly became frustrating. I felt like I was building my own blogging engine using PHP and YAML files. That's not what I signed up for, so I started over with Kirby's more complete starter kit. That turned out to be nearly as frustrating, but in the opposite way. It did <em>too</em> much, and it seemed like magic so I struggled with removing things I didn't want without breaking the site. Eventually, I got it working well enough to ship. Okay, maybe it wasn't ready, but I needed to "feel" it in production.

Let's just list the good and bad as I've found things so far. Off the top of my head...


**Good**

- The control panel is nice, clean, and easily customizable to suit different workflows
- No database. This point is debatable (I <em>like</em> databases) but there's no denying the simplicity.
- I find PHP much easier to work with than Go, and Kirby's PHP is much easier to work with than in Wordpress.
- The folks in the forum are ridiculously helpful, and the community is small enough so that it's not mostly noise.
- I like the template/blueprint/snippet system. It mostly makes sense and is easy to deal with. Especially coming from Hugo.
- Writing posts and managing images is a pleasure overall

**Not so good**

- The "ecosystem" is smaller than Hugo's and much smaller than WordPress'.
- Not free. A license is $100 (but is good for three years). Not expensive, but it eliminated Kirby from little hobby projects where I might otherwise try it.
- Permalinks are tricky. I've read everything, but can't figure out how to properly and consistently implement a sensible URL structure that doesn't involve confusing hoops and abstractions. And moving content files around later seems like a bad idea. This makes it feel fragile.
- Blueprints are YAML files and I still haven't figured out all the different ways to break things. Not for lack of trying!
- I worry that if I don't get things set up perfectly up front, changing my mind is going to be a pain.
- Blocks are great, but I have a long history with Markdown and I worry that not using Markdown will turn out to be a mistake. Or at least it will be hard to get my stuff out of blocks. Maybe <code>jq</code> or something could help, but still.
- There are very few theme options, and many of them cost money. I don't begrudge a small fee for a good theme, but I've not found one I'd be willing to pay for. Sometimes all I want for blogging is to pick a nice theme, make a few tweaks, and write.

So, I'm having fun with Kirby. I love being able to drag a bunch of images into a post and have them ready to use with a single click. I like adding complex content using blocks. The control panel is actually pleasant, which is a nice change. I've always found PHP easy to work with. 

All this is nice, but what's going to happen when the novelty wears off? I know me, and the novelty always wears off. I can already feel myself twitching over having content in text files but those text files aren't easily readable or portable. I also have a dozen things on my list to implement or change, and it feels daunting.

The thing I miss most is my nice Emacs writing workflow when using Hugo. I can already feel it pulling at me.

