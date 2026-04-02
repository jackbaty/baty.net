---
title: Additional backups
date: 2024-02-28T10:52:31.000Z
tags:
  - Workflow
slug: additional-backups
summary: null
cover:
  image: null
  hidden: false
---


Derek Sivers posted about [how he handles backups](https://sive.rs/backup) and it got me thinking about how I handle backups.

I feel like I'm mostly covered. I use [Backblaze](https://backblaze.com) on my MacBook Pro for continuous, off-site backups of both the internal SSD and the attached "Media" drive containing my photos, videos, etc. I clone "Media" to a separate external drive once a week. iCloud syncs my ~/Documents and ~/Desktop folders, so that _should_ be covered. The headless Mac Mini is also using Backblaze. The Synology is synced nightly to Backblaze B2 storage. 

I don't worry too much about losing stuff. And yet, it sometimes feels a little abstracted. A little too magic. This is where Sivers' piece resonated. I dig rsync and use it for pushing local website changes out to servers all the time, so I decided to also use it mimic parts of Sivers' simple routine.

For remote storage, I spun up a 5TB [Hetzner Storage Box](https://www.hetzner.com/storage/storage-box/). Cost is around $10/month. They really are just dumb servers you can access via (S)FTP or SSH. Then I wrote a couple of tiny shell scripts that wrap rsync.

As an added measure, the script can also rsync to an attached thumb drive, so I'm doing that, too. The scripts back up slightly different things to the storage box vs the thumb drive, depending on "importance".

Now I can type "bkremote" or "bkstick" and I have a complete snapshot of (most of) my stuff, one local and one offsite. The nice part is that I can easily get at all of it. No need to log in to a service or unpack weird backup files. It's an exact mirror. The down side is that it's an exact mirror. No history or versioning. If I delete something locally, then sync, it's gone everywhere. I'm ok with this since it's just an adjunct to my current system. But I'm happy to hear about anything that I might be missing.

