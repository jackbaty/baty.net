---
title: Moving this Kirby site from Fortrabbit to my DigitalOcean VPS
date: 2023-10-17T19:16:56.000Z
tags:
  - Blogging
  - Kirby
categories:
  - Misc
slug: moved-kirby-site-from-fortrabbit-to-my-digitalocean-vps
summary: null
---

⚠️ This blog is no longer running Kirby, but I left this here just in case.

I've recently whittled my servers at DigitalOcean down to a single 2GB instance running Caddy. When I started playing with Kirby, I tried getting it running there, but had issues with php-fpm and Caddy not playing well together, so I spun up a hosted instance at (link: https://fortrabbit.com/ text: Fortrabbit).

Running Kirby doesn't require a database or anything fancy, just a web server and PHP, and it bugged me that I couldn't get it working, so yesterday I tried again, and finally figured it out. I'm writing this down so that I don't lose it.

Here's my Caddyfile configuration:
 
```json
baty.net {
    root * /home/jbaty/apps/baty.net-kirby/public_html
    encode gzip
    php_fastcgi unix//run/php/php8.1-fpm.sock
    file_server
    redir /content/* /
    redir /site/* /
    redir /kirby/* /
    redir /index.xml /feed
    redir /rss/  /feed
    redir /feed/  /feed
    redir /feed.rss  /feed
    log {
        output file /home/jbaty/logs/caddy/baty.net-kirby.log
    }
}
```

That's it. I'll need to add headers and a whole bunch more redirects, but this works. I don't love that the PHP version number is hard-coded in the socket path, but that's the only thing that worked for me.

The other change I made was to configure php-fpm to run as user and group jbaty/caddy in `/etc/php/8.1/fpm/pool.d/www.conf`. There's probably a better way to do this, but I couldn't find a combination of permissions that would work for both control panel updates and editing the content files directly.

I like having everything on a single server, so this is better, even though it requires more work from me. Let me know if you notice anything broken.

