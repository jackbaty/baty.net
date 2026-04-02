---
title: No longer keeping my notes in a Git repo
date: 2024-02-28T10:51:37.000Z
tags:
  - Notetaking
slug: no-longer-keeping-my-notes-in-a-git-repo
summary: null
cover:
  image: null
  hidden: false
---

For many years I’ve put every new folder full of anything into a new Git repo. I never questioned it, I just did it because that’s what you do.

I’m thinking about no longer doing this. This morning I was daydreaming while waiting for a folder to finish rsyncing to a server and I was mesmerized by page after page of lines like “.git/objects/fb/70e546350cc4106caf1225706b44c85087ed27” scrolling by. I checked a few of my projects and was surprised by how much space all those .git/ directories use.

Do I even need them? I’m thinking no. I can’t remember the last time I went back and looked at earlier commits or needed to diff anything that wasn’t actual code. My ~/org files don’t need precise version control, they just need good backups. Static websites probably need Git because it’s nice for tracking template/CSS changes. Also, I’ll need it if I ever decide to use Github Pages for hosting, etc.

So I’m considering going through my project folders and removing .git/ directories unless I actually need Git.

