---
title: Fixing the terrible scrolling behavior with Logitech MX Master on macOS
date: 2025-03-19T16:09:25.000Z
slug: fixing-the-terrible-scrolling-behavior-with-logitech-mx-master-on-mac-os
categories:
  - Hardware
tags:
  - Hardware
---


Scrolling with the [Logitech MX Master](https://www.logitech.com/en-us/shop/p/mx-master-3s.910-006556) in Safari sucks out of the box. The following from [this Reddit thread](https://www.reddit.com/r/logitech/comments/141ds1b/comment/kwko5y4/) helped, even though it required installing 2 additional packages.

Here’s the useful part of that thread:

## Install Logitech Options+ (sigh) and set:

[Logi Options+ (Plus): Customization App for Logitech Devices](https://www.logitech.com/en-us/software/logi-options-plus.html)

What a gross bit of software, but it’s necessary here. I’ve read that once this process is done, I can delete the app completely, but I haven’t tried that yet.

-   Scrolling speed: 0% (as the OP says, this is the most important option to set).
-   Scroll direction: Standard (I would set it on Mos, but you have to pick one here anyway).
-   Smooth scrolling: Off (also good to turn off, Mos will take care of it instead).
-   SmartShift: On (If you want it).
-   Sensitivity value: 95% (we’ll see, maybe I’ll take it down to 90%).

## Install Mos:

[Mos | Smooth your mouse](https://mos.caldis.me/)

`brew install mos`

(Note that launching Mos required `xattr -d com.apple.quarantine Mos.app`)

-   General \> Smooth scrolling: On.
-   Advanced \> Step: 75.00 (at least in my resolution, anything lower than this is just not enough of a scroll per ratchet movement).
-   Advanced \> Speed: 3.50 (didn’t try too many others, but it seems to work in conjunction with the rest).
-   Advanced \> Duration: 3.90 (default value, haven’t played around with it yet).
-   Now the ratchet action works as expected from a normal mouse, but when I give it a little nudge it goes into a free-spin and scrolls fast. I don’t know how much accuracy I’m getting with the free-spin yet, but to get to the bottom of a document, it’s great. I’ll update if I keep playing with these settings.

Once I’d done this, scrolling in the MX Master has been like butter.
