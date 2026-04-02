---
title: From Apple Photos to Immich
date: 2025-12-06T11:34:18.000Z
slug: from-apple-photos-to-immich
description: >-
  I deleted my entire Apple Photes library and moved everything into a
  self-hosted Immich instance.
taxonomies:
  tags:
    - Photography
    - Software
---

Well, I finally did it. I deleted my 50,000-photo iCloud photo library and moved everything to self-hosted [Immich](https://immich.app/).

Here are some of my notes from the process[^1]. It was actually much easier than expected. Shout out to a couple of tools, first.

**[osxphotos](https://github.com/RhetTbull/osxphotos)**

> Python app to work with pictures and associated metadata from Apple Photos on macOS. Also includes a package to provide programmatic access to the Photos library, pictures, and metadata. 

I installed it with using Homebrew:

```bash
# Add the tap
brew tap RhetTbull/osxphotos

# Install osxphotos
brew install osxphotos
```

This thing is brilliant. It has a million options and can do pretty much anything with an Apple Photos library. Here's the command I ran to export the entire library in a way intended to work well with an Immich import, along with its output.

```bash
osxphotos export /Volumes/MinistackSSD/iCloudPhotosExport \
> --skip-original-if-edited \
> --sidecar XMP \
> --touch-file \
> --directory "{folder_album}" \
> --download-missing
Using last opened Photos library: /Volumes/MinistackSSD/Photos Library.photoslibrary
Created export database /Volumes/MinistackSSD/iCloudPhotosExport/.osxphotos_export.db
Processing database /Volumes/MinistackSSD/Photos Library.photoslibrary/database/Photos.sqlite
Processing database /Volumes/MinistackSSD/Photos Library.photoslibrary/database/Photos.sqlite
Photos database version: 5001, 11.1.
Processing persons in photos.
Processing detected faces in photos.
Processing albums.
Processing keywords.
Processing photo details.
Processing import sessions.
Processing additional photo details.
Processing face details.
Processing photo labels.
Processing EXIF details.
Processing computed aesthetic scores.
Processing comments and likes for shared photos.
Processing moments.
Processing syndication info.
Processing shared iCloud library info
Done processing details from Photos library.
Exporting 47508 photos to /Volumes/MinistackSSD/iCloudPhotosExport...
Exporting 47508 photos ━━━━━━━╺━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  18% 0:15:032025-12-05 13:27:39,721 - osxphotos - WARNING - photoexporter.py - 1172 - AppleScript export has failed 10 consecutive times, restarting Photos app
Exporting 47508 photos ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% 0:00:00
Processed: 47508 photos, exported: 47731, missing: 35, error: 0, touched date: 95260
Elapsed time: 1:08:39
➜  ~
```

If there's a better combination of options for that export command, it's too late now. Besides, just [look at the README](https://github.com/RhetTbull/osxphotos/blob/main/README.md). It's overwhelming!

**[Immich CLI](https://docs.immich.app/features/command-line-interface/)**

Immich has a handy CLI. I used it to import that entire Apple Photos export.

Installed the CLI via npm:

`npm i -g @immich/cli`

Then, after authenticating with `immich login`, I ran the following:

```bash
immich upload --recursive /Volumes/MinistackSSD/iCloudPhotosExport --album
```

Three hours later, all of my photos were in Immich, with the original Albums and metadata intact. Most of the duplicates were skipped, and I used the Immich duplicate finder to remove the remaining ones. Immich is still chugging away at scanning for faces and running OCR on text in the images. This will take a while, but my library is all there. 


After running a backup on the Immich library, I deleted all of my photos from iCloud. Scary, but they'll be in "Recently Deleted" for 30 days, just in case.

The plan is to treat my iPhone as just another camera. I configured the Immich iPhone app to import everything from Photos automatically, so all I'll need to do is clean things up and delete them from Photos every so often.

This is a big change, but it alleviates some of my concerns about relying on Apple/iCloud. It feels good having everything locally on my NAS. Sure, I'm now responsible for everything, but when it comes to my photo library, that's OK.




[^1]: Thanks to [Jacob Roy](https://couteausuis.se/tinkering/2023/10/13/migrate-apple-photos-to-immich/) for the leg up
