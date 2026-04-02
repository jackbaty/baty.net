---
title: Managing Pure Blog updates using just
slug: managing-pure-blog-updates-using-just
date: 2026-02-07T16:25:00.000Z
status: published
tags:
  - Blogging
  - Pure Blog
description: null
---

> [!NOTE]
> This has been mostly superceded by the built-in upgrade mechanism introduced in [version 1.5.0](https://github.com/kevquirk/pureblog/releases/tag/1.5.0).

Since everything in [Pure Blog](https://pureblog.org) is all in one folder, I needed some way to back things up and deploy updates to the code, independent of the content. I use [just](https://github.com/casey/just) with a few basic recipies.

Available recipes:

- **default** - Lists recipies (e.g. just --list)
- **backup-to-local** - Pulls content, code, and custom config to a dated folder on my local machine
- **serve** - Run local PHP version of the site
- **upgrade** - Runs `git pull` locally
- **deploy** - Send just the source php to the server
    
Here's my justfile so far:

```
SERVER_HOST := "myserver.com"
SERVER_USER := "myuser"
SERVER_DIR := "/server/path/to/blog"
LOCAL_DIR := "~/local/path/to/blog"
BACKUP_DIR := "~/local/path/to/backups"
BACKUP_DATE := `date +%Y-%m-%d`
PUBLIC_DIR := "{{LOCAL_DIR}}"
TARGET := "Server03"

default:
	just --list

serve:
  php -S localhost:8000

upgrade:
	git pull
	
backup-to-local:
	echo "Backing up to {{BACKUP_DIR}}/{{BACKUP_DATE}}"
	rsync -avz {{SERVER_HOST}}:{{SERVER_DIR}}/ \
    {{BACKUP_DIR}}/{{BACKUP_DATE}} \
	--delete

deploy: 
	@echo "\033[0;32mDeploying updates to {{TARGET}}...\033[0m"
	rsync -v -rz \
	--checksum \
	--delete \
	--no-perms \
	--exclude /content/ \
	--exclude /config/ \
	--exclude /assets/images/ \
	--exclude /assets/css/custom.css \
	--exclude justfile \
	{{LOCAL_DIR}} {{SERVER_USER}}@{{SERVER_HOST}}:{{SERVER_DIR}}

```

I threw all this together rather quickly, so I'm sure there's more to do. Maybe there's a better way to handle this?
