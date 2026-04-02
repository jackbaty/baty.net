---
title: The pros and cons of moving back to Ghost
date: 2024-11-06T13:17:29.000Z
slug: the-pros-and-cons-of-moving-back-to-ghost
categories:
  - ''
tags:
  - Blogging
  - Ghost
summary: null
cover:
  image: null
  hidden: false
  caption: null
---
  
OK, it's happening again. Hugo broke my site for the second time in two updates. I got mad (again) and decided it was time for us to break up.

I dusted off the version of the blog that I'd built using [Eleventy](https://11ty.dev/) and started working on getting everything updated. Except it didn't work. I don't know what I was missing or what had changed since I stopped using it, but things were broken. I then decided that I would start fresh with Eleventy's [base blog repo](https://github.com/11ty/eleventy-base-blog). That was also a mistake. After several hours, I had built an ugly blog, without some of the features I'd wanted. I gave up.

In the meantime, the Hugo devs had fixed the bug that had broken things earlier. That meant I could stop what I was doing and get back to using Hugo and the template that I quite like. The problem was that I'd already decided I no longer wanted to use Hugo, even though it was working again.

<figure><img src="/img/2024/ghost-logo-dark-2.png" alt="Ghost logo"></figure>

So, I did something I told myself I would never do again; I spun up a [Ghost](https://ghost.org/) instance. I have a complicated relationship with Ghost. It's fast, simple, and clean. Its editor is as good or better than everyone else's, and I can run an instance for under $5/month using [PikaPods](https://www.pikapods.com/).

I was, as usual, immediately smitten with Ghost's editor. I made the usual tweaks to permalinks and other settings. I killed everything related to subscribing. Within an hour I had a nice, clean, easy blog that was ready to go. Except there was no content. I had an old backup from earlier this year, so I was able to import about 80 posts from that.

There are dozens of blog posts around that claim to have a solution for importing Hugo's Markdown files to Ghost's JSON format. None of them worked for me. I even asked ChatGPT for a script, and it was surprisingly good, but it imported pages and no posts.

Unless I can find a way to automate the import, I'm left with the task of manually moving about 250 posts. It's almost enough to put me off the whole affair, but I'm typing this in a browser on my laptop in bed, and I'm not worried about Hugo versions or sync status or SSH keys or any of that. It's pretty compelling, so I'm planning to move ahead with the migration.

Oh, I almost forgot the pros and cons.

****Pros****

-   Great editor: Images, callouts, linking, fancy blockquotes. It's very nice.
-   Can post from anywhere with a working browser
-   Fast
-   Reasonably cheap to run
-   Decent selection of themes and it's simple to switch between them
-   I can send emails out for new posts if I choose
-   They are working on ActivityPub integration
-   It doesn't break every 5 minutes

  

****Cons****

-   It's not a static website
-   While I could edit posts and somehow post them using Emacs, it's not really worth it.
-   Themes are expensive
-   I lose some nerd cred
-   They're focused on "monetizing your audience". Gross.
