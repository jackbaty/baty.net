---
title: Ending my OpenBSD experiment (Almost)
date: 2024-01-04T11:13:45.000Z
tags:
  - OpenBSD
categories:
  - Tech
slug: ending-my-openbsd-experiment
summary: I tried OpenBSD. It's nice. I don't need it right now. (Or do I?)
---

I did [this fun thing](/journal/2023/12/29/running-an-openbsd-server) from Derek Sivers because I wanted to play with [OpenBSD](https://www.openbsdfoundation.org) and with [Vultr](https://www.vultr.com/) for hosting.

Well, I played with it. It was fun. I got to see how [Dovecot](https://dovecot.org/) works and I learned how to configure Relayd and the OpenBSD httpd server.

I think I'd end up liking it. BSD feels lighter and simpler and therefore probably more secure than the Ubuntu servers I'm running. 

However, I don't need another server to manage. I don't need to run my own mail server or CalDAV server. My VPS at Digital Ocean has been running (::knocks wood::) smoothly for years and I've got the configuration down. 

I'll be deleting the OpenBSD server once I've moved the few sites I'd migrated there back to Digital Ocean. 

Remember, [Reduce and Simplify](/journal/2023/12/31/reduce-and-simplify).

I may try again later with stock OpenBSD and Caddy, without all of the Sivers' stuff.

**2 hours later:** I was right. I spun up a fresh OpenBSD server at Vultr and configured it myself. No services running but relayd->httpd and so far the only site it's running is [jackbaty.com](https://jackbaty.com). I like the *idea* of BSD so much that I couldn't give up quite yet.
