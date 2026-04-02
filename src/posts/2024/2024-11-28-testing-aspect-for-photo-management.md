---
title: Testing Aspect for photo management
date: 2024-11-28T17:45:23.000Z
tags:
  - Photography
  - Software
cover:
  caption: 'Photo: Bildhuus website'
  hidden: false
  src: /img/2024/aspect.jpg
slug: testing-aspect-for-photo-management
---

Some former Nik Software people are building a new tool for managing photo libraries. It's called [Aspect](https://aspect.bildhuus.com/). I'm a sucker for any photo-related software, so I installed the beta and spent yesterday testing it. I took some notes after using it for a day.

First impressions were good. I like the ideas behind Aspect. It relies on the underlying file system, so it's reasonably transparent. It organizes things for me based on dates and events. I can control the structure. I can even change it later, and Aspect will move things around to match.

There are collections and smart collections. There are metadata filters for labels and ratings. All table stakes so far.

Where I think Aspect becomes interesting is in how it manages photos and can synchronize between devices, without relying on a cloud service.

If I create an "event" in Aspect, it creates a dated folder and moves any photos put into the event into that folder. I'm lazy, so this encourages me to keep things tidy. And I'm not worried about losing the structure, since the events and file system are kept identical. I like this.

I was initially put off by being forced to create the library on the same device as the photos. This turns out to not be a real problem, since I can add other devices (computers or drives) later and sync them. For example, I can keep files on my internal drive, but also add my big external drive or NAS as another device, and configure Aspect to sync everything. This can be based on disk usage, or time period, or manually. The idea is sound, but I haven't tested it yet, myself. I did "join" the Mac Mini library from my MBP, and could see everything. Not sure yet how it handles thumbnails vs originals, etc. Still, neat ideas.

Is it ready? No, not quite yet.

Aspect crashes frequently on my Mac. I haven't lost any work or images, but it feels unstable.

Scrolling needs tweaking. I'm told it's being worked on, but the scroll "momentum" needs dialing way back. I overshoot my target every time and it's quite annoying.

My big problem so far, though, is that Events are based on dates of the files contained in the event. This would normally be fine, but if I edit a copy and save that copy, the date of the event is updated to the current date. This both renames the folder and causes the event in the UI to show up first, even if it's from long ago. That, if it continues, is a deal-breaker for me. I read a forum post saying they're planning to add editable attributes to Events, so perhaps this is only a short-term issue.

Aspect is not a photo editor or RAW processor, so I need to open the files with an external editor. I tried using Capture One for this, but it was awkward. Capture One refuses to write anything to RAW files, so edits are not included as a JPEG preview in the DNG files. This means that unless I export a JPG, I can't see the edits withing Aspect. Instead, I've been using Camera Raw/Photoshop. Camera Raw can be configured to update the preview. I have always avoided Camera Raw, but I don't know why. It's basically Lightroom without the library. I'm finding it easy to work with, and it fits the Aspect flow nicely.

**What I like**

-   I can manage files from within Aspect or directly in the file system. This feels liberating.
-   Event creation and management is very easy, so it actually gets done.
-   Device sync with no cloud requirements
-   Handles variants automatically (although it seems inconsistent so far)
-   "Workflow" vs "All files" modes let me hide photos I don't need to see (DNG camera scans, failed edits, etc). This is manual, which is perfect.
-   One-time purchase (I think)
-   The developers say the right things: "Your Photos on all of your Devices", "Access your Library directly from the File System", "No subscription, no cloud"

**What I'm waiting for**

-   Fix for scrolling issues and frequent crashes.
-   Stabilized date handling for Events

Aspect is one of many DAM solutions. I've tried most of them, but there's something about Aspect's attitude that works for me. I'm not ready to go all-in yet, but I'll continue testing and watching for updates.
