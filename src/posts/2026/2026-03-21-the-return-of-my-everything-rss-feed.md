---
title: The return of my Everything RSS feed
date: 2026-03-21T10:25:16.000Z
slug: the-return-of-my-everything-rss-feed
categories:
  - ''
tags:
  - Blogging
  - AI
summary: null
cover:
  alt: Screenshot of feeds.baty.net
  caption: feeds.baty.net
  src: /img/2026/screenshot.webp
---

After posting about having [four blogs and a wiki](https://baty.net/posts/2026/03/four-blogs-and-a-wiki/), I felt guilty that things were scattered all over the place. There are a handful of people who actually want to follow all of my posts, and I've been making it difficult for them.

<!-- more -->

For a while, I kept a WordPress instance with a couple of plugins that would consolidate various RSS feeds into a single "Everything Feed". I lost interest in maintaining it, and grew tired of the plugins nagging me to "Upgrade to Premium!" all the time. It was overkill and a pain, so I pulled the plug. Besides, I shouldn't have so many blogs, anyway, right?

The dream of having One True Blog remains ellusive. It occurred to me that if I'm going to continue posting to several blogs, I should bring back the Everything Feed, but only if it's easy to maintain.

My feeds don't update _that_ often, so I wanted a basic static site that let me trigger updates manually when needed. I sat down with Claude yesterday and we came up with a simple (Node.js) app that parses all of my feeds and generates one master feed. There's a companion web page containing a link to the feed, and cards for each individual site as well.

You can see it at [feeds.baty.net](https://feeds.baty.net).

It took an hour to build, test, and deploy. "Vibe coding" has derogatory connotations, and is a bad idea in many places, but there's no denying its utility for small projects like this. I would _never_ have bothered trying to build this on my own. It was fun, fast, and easy. And hopefully useful.
