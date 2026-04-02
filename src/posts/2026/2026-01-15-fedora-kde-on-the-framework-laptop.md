---
title: Fedora/KDE on the Framework laptop
date: 2026-01-16T00:00:00.000Z
slug: fedora-kde-on-the-framework-laptop
categories:
  - ''
tags:
  - Linux
summary: I've been surprised to learn that I prefer KDE to Gnome
---

When I was setting up my desktop computer with Linux, I wanted to install Gnome, but I couldn't get itto work with the Apple Studio Display. I went with KDE instead, and put Gnome on the laptop.

After using both for a couple weeks, it turns out I prefer KDE. This morning, I wiped the Framework and installed KDE. It took me a couple of hours to get to a point where I could do most of the things I normally do (write this post, for example).

I didn't take detailed notes, but I did list all of the things I've done so far. I'm putting it here for safe keeping. I keep threatening to make this into a script, but honestly I'd rather just run through it manually each time.

## Install log for Fedora/KDE on the Framework

**Jan 16, 2026**

- Configure inverse scrolling
- Disable tap-to-click
- Set Caps Lock as Control
- Log into 1Password
- Log into Firefox
- sudo dnf install syncthing
- Add device to Syncthing from another computer. Share everything
- sudo dnf install -y stow
- sudo dnf install -y fzf ripgrep zoxide just
- curl -sS https://starship.rs/install.sh | sh
- stow bash
- stow auth
- stow ssh
- sudo dnf install -y pandoc
- sudo dnf install -y texlive-scheme-full
- sudo dnf install -y neovim
- add Start Syncthing to Autostart apps
- stow pandoc 
- sudo dnf install -y btop 
- sudo dnf install -y fastfetch
- sudo dnf install -y emacs
- git clone https://github.com/jamescherti/minimal-emacs.d.git .config/emacs
- git clone git@github.com:jackbaty/dotemacs.git .config/emacs-mine
- cp .config/emacs-mine/pre-early-init.el .config/emacs/
- ln -s ~/Sync/emacs/manual-packages .config/emacs-mine/
- Install Berkeley Mono font to ./local/share/fonts
- sudo dnf copr enable dejan/lazygit && sudo dnf install lazygit
- Install Signal (Flatpak)
- sudo dnf install aerc
- stow aerc
- python3 -m venv maestral-venv
- python3 -m pip install --upgrade maestral  
- maestral start (then auth with Dropbox)
- maestral autostart -Y
- sudo dnf install -y go hugo



