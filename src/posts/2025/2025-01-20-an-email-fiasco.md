---
title: An email fiasco
date: 2025-01-20T21:06:38.000Z
slug: an-email-fiasco
categories:
  - Software
tags:
  - Email
  - Notmuch
---

All I wanted was to use [notmuch](https://wiki.archlinux.org/title/Notmuch) on my MBP to manage email, just like I do on my Mac Mini. The only viable solution I found was [muchsync](https://www.muchsync.org/). There's no macOS installer for it[^1], so I figured I'd compile it myself. 

A few years ago I promised myself that if something required `./configure && make && make install` I would skip it. Well, I _really_ wanted to try it, so off I went. The `make` command failed immediately because it couldn't find notmuch.h. Great, path problems. After an hour of throwing things at the wall, adding some environment variables worked:

```sh
    export CPPFLAGS="-I/opt/homebrew/include"
    export LDFLAGS="-L/opt/homebrew/lib"
```

Cool. I built it on both Macs.

muchsync requires SSH access to the "server" machine, which was to be the Mini, so I figured I'd use the Tailscale IP. Not so fast. One needs to enable Tailscale SSH first by running `tailscale set --ssh`, so I did. Except that returned this:

"The Tailscale SSH server does not run in sandboxed Tailscale GUI builds."

Crap. I'd installed Tailscale from the App Store. I uninstalled it completely (not easy), and installed the standalone version. I confirmed it was the standalone version, but I still got the sandbox error. For the hell of it, I enabled "normal" SSH access on the Mini and for some reason was able to connect via SSH over the Tailscale IP. I've no idea why it worked, but after an hour of tripping over everything, I didn't argue.

I read the muchsync docs and still didn't quite understand how everything fit together, but the instructions said to do something like, where SERVER is the IP of my Mini:

```sh
    # First run
    muchsync --init ~/Mail SERVER
    
    # Subsequent runs
    muchsync SERVER
```

That took a while, but seemed to work. I had what looked like a copy of all my mail and notmuch DB in ~/Mail on my MBP.

The second run of `muchsync SERVER` took way longer than I expected, so I logged into the web UI of Fastmail and watched as duplicate emails poured in. What's worse, most of the emails in my account looked to have arrived at the same time, 9:15 AM, which was "now".

I obviously did something wrong. I re-read the docs, but couldn't figure out why it was happening. I changed a setting or two and re-ran muchsync several times. I also ran the usual `mbsync -a` on the Mini.

After all that, I ended up with four copies of most of my messages, and most of them were marked as unread. I used the unread status as an opportunity to delete the duplicates, since those were the only things unread.

I don't know why it happened, and I don't know how to fix it, but I wasted the better part of my day fighting with an email fiasco brought on simply because I wanted to read my email in a specific way on two machines.

This is why they invented IMAP. I should probably just use that.

[^1]: There is actually a MacPorts port, but I didn't want both that and Homebrew on the same system. Besides, there were over 200 dependencies, so nope.
