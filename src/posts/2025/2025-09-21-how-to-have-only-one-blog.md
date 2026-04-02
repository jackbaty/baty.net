---
title: How to have only one blog
date: 2025-09-21T10:45:37.000Z
slug: how-to-have-only-one-blog
tags:
  - Blogging
summary: 'this is a question, not a manual'
---

I really really want to reduce my blogging footprint to a single place, but I can't seem to figure out how to do it.

I mean, I know how to do it. It's just that there are several _ways_ to do it, and I can't decide which path to take.

The best option, and the one I should choose, is to just keep posting here at baty.net using Hugo. I mean, for the most part it's "done" and it works. It's "Jack's blog" to most people. I have a posting workflow that does everything I need and makes a lot of it pretty easy. Hugo renders a simple, static website that is simple to host and deploy. It's local first, and git-able, so there's little risk of losing anything.

But Hugo can be a pain. Even after years, I find its templating system to be inscrutable. Hugo is upgraded frequently, which is good, but the upgrades often introduce breaking changes, which is bad. Hugo has themes, so I can change themes when I get bored. And I would, but switching themes is too much work, due to every theme developer using different variations of front matter. I tweaked the theme I use enough that it deserved its own fork. Now I'm maintaining a fork, which I'd rather not do.

My second option is to put everything at [daily.baty.net](https://daily.baty.net). The daily blog is built with Kirby, which I really like. There's an actual control panel/CMS and everything. I spent a lot of time getting Kirby to render the blog the way I like blogs to work. That is, a collection of posts and notes organized by day. Add easy drag and drop of images and it's a pretty compelling package. Except I built the entire theme from scratch. That would be fine, but I pulled a lot of it from an ancient set of HTML/CSS and it's not aging well. There's no dark mode, which feels like table stakes at this point. I don't feel like figuring out how to fix and/or modernize things right now.

Plus, now I'm maintaining Kirby. It's not hard, but it's also not something I'm interested in spending time on. Kirby uses text files for post data, which is great, but it doesn't use "normal" YAML front matter. It bugs me. It might as well be in a "proprietary database" that we all turn our noses up at. Kirby _should_ be the best of both worlds, but I worry that it will continue to be too much effort. I suppose I could just ignore all that and just use it like it is, but I can't seem to ignore all that.

The dark horse option is to give up and just use WordPress. I mean, for $5/month I can spin up a PikaPod pod and have a mostly-managed WordPress install. I have in fact done this, as a test, at [baty.blog](https://baty.blog)[^1]. I find the default Twenty Twenty Five theme to be kind of nice. I get a CMS, stats, any plugin one could think of, easy theme changes, and a massive ecosystem.

It's that damn Site Editor that puts me off, first thing. I could use the theme as-is, but who does that? I never do. I _want_ to, but I can't seem to leave things alone. Changing themes is easy, but editing them is a nightmare. Also, I can't ignore all that extra markup soup that WordPress tends to spit out. It feels icky, and I can't seem to ignore it.

I'm writing all this as a way to think through my options. I still don't know which is best. I feel like I should stay here with Hugo and just stop overthinking it. Maybe I'll try that for now.


[^1]: There's a good chance that site won't exist when you read this, sorry.
