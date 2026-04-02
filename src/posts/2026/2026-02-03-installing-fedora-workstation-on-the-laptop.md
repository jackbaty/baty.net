---
title: Installing Fedora Workstation on the laptop
date: 2026-02-03T17:01:27.000Z
slug: installing-fedora-workstation-on-the-laptop
categories:
  - ''
tags:
  - Linux
summary: >-
  I finally started to become comfortable in KDE, so I decided to try Gnome
  again.
cover:
  alt: Fastfetch screenshot
  caption: null
  src: /img/2026/feature-fedora-fastfetch.png
---

My laptop has been running Fedora's KDE spin. I first tried the stock Fedora with Gnome, but since my desktop was running KDE, I figured I should standardize on that.

Standardization is boring. :)

I installed Fedora Workstation this morning. I'd taken notes from the last time, and those helped speed things along. Still, it was 2 hours from installer to a fully functional system. I'm typing this post in Emacs and will deploy using Hugo shortly.

For the record, here are my raw notes from the installation. I need to work on the order in which I do things, but this wasn't bad.

# Installing Gnome on the Framework 2026-02-03

```
- sudo dnf install syncthing
- Settings
    - Trackpad -> Disable tap to click
- Install Gnome Tweaks
    - set caps lock to control
    - Emacs Input on
- sudo dnf install -y stow just fzf zoxide ripgrep
- Install Extension Manager (Flatpak)
- Installed Dash to Dock extension (via Extension Manager)
- Installed Clipboard Indicator extension (via Extension Manager)
- Installed starship curl -sS https://starship.rs/install.sh | sh
- stow bash
- stow pandoc
- sudo dnf install pandoc
- sudo dnf install texlive-scheme-full
- sudo dnf install neovim
- sudo dnf install rust cargo # (for eza, since eza is no longer in fedora repos)
- Build and install eza
    git clone https://github.com/eza-community/eza.git
    cd eza/
    cargo install --path .
- Add berkely-mono to ~/.local/share/fonts/berkeley-mono
- sudo dnf copr enable dejan/lazygit
- sudo dnf install lazygit
- Install Signal (Flatpak)
- stow auth
- stow git
- stow gnupg
- stow jrnl
- stow pass
- stow ssh
- stow aerc
- sudo dnf install aerc
- sudo dnf install emacs
- Configure emacs
    - git clone https://github.com/jamescherti/minimal-emacs.d.git ~/.config/emacs
    - git clone [my dotemacs repo] to ~/.config/emacs-mine
    - cp ~/.config/emacs-mine/pre-early-init.el ~/.config/emacs/
    - ln -s ~/Sync/emacs/manual-packages ~/.config/emacs-mine/
- sudo dnf install fastfetch
- Add "Start Syncthing" to Startup Applications in Gnome Tweaks app
- Install FireCode Nerd Font
- ...a nearly infinite number of little tweaks that I didn't record.
```

Since the laptop is meant to be a sort of satellite computer orbiting my desktop Mac Mini, I don't need _everything_ installed. The above covers just the basics.

One day I should write a script that takes care of this for me.
