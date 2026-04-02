---
title: Importing Org Journal to Day One
date: 2025-06-15T12:26:38.000Z
slug: importing-org-journal-to-day-one
categories:
  - ''
tags:
  - Workflow
  - Journaling
summary: null
---

I wanted a different view into my org-journal history, so I imported it into Day One

* * *

Plain text is great, but has limits. I've been journaling in plain text (.org) with [org-journal](https://github.com/bastibe/org-journal)since 2018. It's just a bunch of .org files in a folder. It's great, and, you know, future-proof.

Before Org-Journal, I used [Day One](http://dayoneapp.com/) for journaling as far back as 2011. Day One is pretty, powerful, and available everywhere. There are "on this day" and "today" features that I find useful. It integrates smoothly with the Photos app, and it stamps entries with the current location and weather conditions. Add fast sync on all devices with end-to-end encryption, and it makes for a darn nice journaling setup.

I thought it would be nice if I could pull my org journal into Day One. This would give me a nice way to peruse my history that doesn't involve regular expressions 😁.

I asked Claude for a shell script that would use the Day One CLI tool to import my org-journal files. With one small tweak, it worked the first time. Here's a [gist with the shell script](https://gist.github.com/jackbaty/55738c9a9209c90705346fdeaf5062cc).

The script pulled in 1,315 org-journal entries into a separate "Org Journal" Day One journal. Pretty cool.

Recently, I've been journaling with [Journelly](https://xenodium.com/journelly-for-ios), which is a nice, simple journaling app for iOS. The killer feature for me is that Journelly stores my journal as an .org file. This means I can also create journel entries right from Emacs on my Mac. My next trick is going to be importing Journelly entries into Day One the same way I did with org-journal.
