---
title: My weekend with Linux. Omarchy to Fedora (Cosmic)
date: 2025-12-15T11:52:26.000Z
slug: my-weekend-with-linux-omarchy-to-fedora-cosmic
tags:
  - Linux
---

My first serious foray into Linux was driven by how deeply I fell immediately in love with [Omarchy](https://omarchy.org). Omarchy made me realize that I could totally live in Linux. If I wanted to.

The big draw of Omarchy for me was Hyprland and window tiling. I've tried a few other tiling window managers (e.g. i3) but they were either too hard to configure or felt janky. Omarchy's version worked great, with great keybinding support. It felt good to no longer spend half my time in the OS moving and resizing windows. Omarchy's rendition of Hyprland made it easy and fun.

The downside of tiling window managers is they Always Be Tilin'. Sometimes I don't want that. When an app like Darktable opens a tiny dialog window, and that window suddenly fills half the screen, while shrinking the main window, I don't enjoy it.   Yeah, I can toggle specific windows to float, but it's inconvenient. And I'm sure I could wrangle Hyprland to do the right thing with the right apps in the right workspaces, but figuring how to do that is low on my list of fun things to do.

I had fond memories of the way Pop!_OS let me toggle tiling on and off, and when I learned that their new "Cosmic" desktop offered that feature, it made me want to try it.

The other distribution that I got along well with was Fedora. Turns out that Fedora has a [Cosmic "Spin"](https://www.fedoraproject.org/spins/cosmic), so I dove in and installed it on both the laptop and desktop.

I spent the rest of the weekend getting everything installed and configured to my liking. It went pretty well, although it took some time to get the hang of software installation (dnf vs pacman, etc).

How's it going so far? Honestly, kind of so-so.

While the ability to set window behavior per workspace is nice, Cosmic behaves more like macOS. When I click on an app in the dock, it whisks me to whichever workspace that app is currently running in. With Omarchy, it would open a new instance of the app in the current space. I prefer that behavior. It's more consistent and less jarring.

I'm finding it more difficult to find and install software in Fedora. Omarchy had handy TUI apps for both the official repository and the AUR. They were nearly identical. And I found almost every app I wanted right away. In Fedora, I feel like things are spread out a bit more. It could be just a matter of familiarity, but this didn't happen with Omarchy.

Fedora/Cosmic wins on ease of configuration, though. It took me 30 seconds to remap my CAPSLOCK key to Control. That's the first time I didn't struggle with that in any distro. It was right where I looked for it and it was a simple, specific setting. Nice. The other configuration bits are nearly as straightforward. I don't hate using a config file to set things up, but having a GUI available is handy.

Cosmic has worked smoothly, for the most part. There are a few glitches here and there, but most of them have been minor. Not all of them, though. Here are a few notable problems I've run into.

- Can't install jrnl due to incompatible python versions (of course)
- None of the file managers will mount SMB shares
- Emacs had issues installing some packages

Overall, Fedora and Cosmic feel pretty strong. Some of my complaints are due to lack of familiarity, and I assume most of the bugs will be ironed out as Cosmic is updated. I'll be sticking with it for now[^1].

[^1]: Assuming, of course, that I don't run crying back to macOS :)




