---
title: A couple of Mu4e improvements
date: 2023-05-06T00:00:00.000Z
tags:
  - Emacs
slug: mu4e-improvements
---

I usually prefer reading my email using [Mu4e](https://www.djcbsoftware.nl/code/mu/mu4e.html) in Emacs, but the Vim ("Evil") keybindings have been broken since upgrading to 1.10.x. (See [this PR](https://github.com/emacs-evil/evil-collection/pull/729) for background). This added so much friction that I went back to Mail.app and [Notmuch](https://notmuchmail.org/). Recent changes in evil-collection have fixed the issue but weren't available yet when updating Doom. The fix for now was to `(unpin! evil-collection)` in packages.el. Much better!

Another snag I've run into while using Mu4e was that sometimes I also use Apple's Mail on macOS and iOS and any messages I delete there would only be flagged as "trashed" in Mu4e, so they would show up in the inbox, cluttering things considerably. The fix for this was to set `Expunge Both` in my .mbsyncrc file. Also much better! That one has been bugging me for a long time.

So the good news is that I'm back to using Mu4e for my email, and it's now better than ever.
