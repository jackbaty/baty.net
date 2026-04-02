---
title: Show a new tab when selecting New Tab in Zen Browser
date: 2025-10-25T13:53:39.000Z
slug: show-a-new-tab-when-selecting-new-tab-in-zen-browser
categories:
  - Software
tags:
  - Software
summary: 'I prefer seeing a new tab, not the URL search dialog'
---


At some point, for some reason, Zen changed the New Tab behavior when opening new tabs:

> NEW TABS HAVE BEEN REMOVED, instead we are opting for opening the URL bar and then pressing enter to open a new tab (‘zen.urlbar.replace-newtab’ to false in about:config to revert)
> 
> [https://zen-browser.app/release-notes/#1.7.5b Features section.](https://zen-browser.app/release-notes/#1.7.5b%20Features%20section.)

I don’t approve, so I found the setting to revert it using about:config…

    zen.urlbar.replace-newtab = false

Much better.

