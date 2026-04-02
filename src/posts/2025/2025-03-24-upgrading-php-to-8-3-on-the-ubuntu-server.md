---
title: Upgrading php to 8.3 on the (Ubuntu) server
date: 2025-03-24T16:29:40.000Z
slug: upgrading-php-to-8-3-on-the-ubuntu-server
categories:
  - ''
tags:
  - Linux
---

I upgraded PHP to v8.3 (from 8.2) today on the server running baty.net. I don't pretend to be an Ubuntu sysadmin, so I'm writing it down, just in case.

```sh
    sudo apt update
    sudo apt install php8.3 php8.3-cli php8.3-{bz2,curl,mbstring,intl,gd,xml}
    sudo apt install php8.3-fpm
    sudo a2enconf php8.3-fpm        # enable it
    sudo vi /etc/caddy/Caddyfile    # replace socket path with 8.3
    sudo systemctl reload caddy
    sudo sudo a2disconf php8.2-fpm  # disable 8.2
    sudo apt purge php8.2*          # in fact, just delete 8.2
```

The site runs on Caddy, so I needed to change the path to the fpm socket. Here's the Kirby section of the Caddyfile...

```
    (kirby) {
        php_fastcgi unix//run/php/php8.3-fpm.sock
        @blocked {
            path *.txt *.md /content/* /site/* /kirby/* /.*
        }
        redir @blocked /
    }
```
