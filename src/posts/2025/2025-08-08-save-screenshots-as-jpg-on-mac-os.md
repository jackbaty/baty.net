---
title: Save screenshots as JPG on macOS
date: 2025-08-08T10:45:56.000Z
slug: save-screenshots-as-jpg-on-mac-os
categories:
  - ''
tags:
  - macOS
summary: null
---

I take a lot of screenshots using the built-in screen capture tool on macOS. By default, these are saved as PNG files, which are unnecessarily ginormous for my purposes, so I always convert them to .jpg files.

Today I learned that the default format can be changed:

```sh
defaults write com.apple.screencapture type jpg
killall SystemUIServer
```

Better.
