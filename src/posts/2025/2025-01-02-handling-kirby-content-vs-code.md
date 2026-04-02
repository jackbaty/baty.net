---
title: Handling Kirby content vs code
date: 2025-01-02T16:51:57.000Z
tags:
  - Kirby
categories:
  - Blogging
slug: handling-kirby-content-vs-code
---

One of the things that frustrated me about Kirby last year was handling code/template changes vs content changes. I [complained about it here](https://baty.net/journal/2024/02/29/editing-in-the-live-kirby-panel).

Ideally, since Kirby is a PHP CMS, I would do everything directly on the server. What I've done more often instead, is to run a full copy locally and rsync the final product (code, blueprints, content, images, etc.) to the production instance. Content is kept in plain text files, so both code and content changes need to be kept in sync. 

Except I don't want to run Herd or whatever locally all day and I don't want to rsync everything every time for a site that's not completely static.

There are probably a dozen ways to handle this, but here's how I'm doing it:

I edit content directly on the server via the Kirby panel, as I think is intended. I make code/layout changes locally, running a local copy via Herd. But now what? I still use rsync via a Makefile. So when I want to pull down the most recent content, I run `make pull`. When I want to update code, I run `make deploy`.

The "pull" recipe rsyncs everything from the /content/ directory on the server to my local site. The "deploy" recipe rsyncs everything from /assets/ and /site/ directories up to the server. 

I like this because managing which files should and shouldn't be shared is a hassle. Things like the cache, media, logs, etc need to be ignored. I've goofed in the past and caused myself all sorts of grief. This way, the code is one thing and the content is another.

Here are the relevant parts of the Makefile:

    SERVER_HOST=my.server.host
    SERVER_DIR=/srv/baty.net-kirby/public_html
    PUBLIC_DIR=/Users/jbaty/Sync/sites/kirby-blog/
    TARGET=Hetzner
    
    checkpoint:
        git add .
        git diff-index --quiet HEAD || git commit -m "Publish checkpoint"
    
    pull:
        rsync -avz $(SERVER_HOST):$(SERVER_DIR)/content/ $(PUBLIC_DIR)content \
                --delete
    
    deploy: checkpoint
        @echo "\033[0;32mDeploying updates to $(TARGET)...\033[0m"
        rsync   -v -rz \
                --checksum \
                --delete \
                --no-perms \
                --exclude /logs/ \
                --exclude /cache/ \
                --exclude /config/.license \
                --exclude /sessions/ \
                $(PUBLIC_DIR)site/ $(SERVER_HOST):$(SERVER_DIR)/site
        rsync   -v -rz \
                --checksum \
                --delete \
                --no-perms \
                $(PUBLIC_DIR)assets/ $(SERVER_HOST):$(SERVER_DIR)/assets
    
    # Just in case, this sends everything
    deployall: checkpoint
        @echo "\033[0;32mDeploying updates to $(TARGET)...\033[0m"
        rsync   -v -rz \
                --checksum \
                --delete \
                --no-perms \
                --exclude media/ \
                --exclude Caddyfile \
                --exclude /site/logs/ \
                --exclude .git/ \
                --exclude .htaccess \
                --exclude Makefile \
                --filter=':- .gitignore' \
                --exclude .gitignore.swp \
                $(PUBLIC_DIR) $(SERVER_HOST):$(SERVER_DIR)
        open raycast://confetti
    

It's messy, but seems to work without causing too much trouble. I commit everything each time I deploy, so even content changes are covered (assuming I've `make pull`\-ed recently. I should investigate some of the Git plugins for Kirby and see if there's some simpler way to do this. If you know of any, please let me know.
