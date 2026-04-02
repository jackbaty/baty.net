---
title: Removing analytics from baty.net
date: 2026-01-27T12:19:34.000Z
slug: removing-analytics-from-baty-net
categories:
  - ''
tags:
  - Blogging
  - ai
summary: AI bots have made site analytics less useful
---

There are people who claim not to care at all about how many people visit their site. I don't believe them.

I suppose if you have a tendency to write differently based on analytics, and you don't want that, then sure, get rid of them. But you care, at least a little, right?

I care. I like to see where people are coming from. I often find interesting blog posts that happen to mention me. It starts conversations. I've never changed what or how I write because of what analytics tells me, but I've learned about what people like and where they come from. I find it interesting.

This morning, however, I deleted analytics from all of my sites.

A few weeks ago, I noticed that traffic had increased tenfold to baty.net and 90% of that traffic was from China. It was all one or two views of every possible page on the site. AI bots, obviously.

I spent a few hours figuring out how to block IPs from China at the firewall. It worked, but the IP list changes regularly and needs updating. There are nearly 10,000 rules in my firewall.

When I looked today, 60% of my traffic is now from Singapore, with the same click-every-possible-link behavior. Sigh.

I thought that bots wouldn't register visits when the site's tracking scripts rely on JavaScript, but apparently that's not the case.

Web traffic is still processed on the server by GoAccess, so if I feel like digging, it's all there, but the simple "Who, and from where?" analytics are no longer worth it.
