---
title: Handling robots.txt with Caddy and Kirby CMS
date: 2025-04-02T21:24:30.000Z
slug: handling-robots-txt-with-caddy-and-kirby-cms
categories:
  - ''
tags:
  - Kirby
---

[Kirby CMS](https://getkirby.com) uses plain `.txt` files for content. Since the bare .txt files should not be accessible with a browser, one normally uses a path matcher in [Caddy](http://caddyserver.com) and then denies requests based on a path, like so...

`path *.txt /content/* /site/* /kirby/* /.*`

But what if I want a /robots.txt file? Turned out to be a simple answer, but it took me a while to find it. I'm writing it down here in case anyone else might need it. Here's the whole block from my site's Caddyfile:

```
(kirby) {
    php_fastcgi unix//run/php/php8.3-fpm.sock
    @blocked {
        path *.txt *.md /content/* /site/* /kirby/* /.*
        not path /robots.txt   # <----- Here's the important part
    }
    respond @blocked "Not Found" 404 {
        close
    }
}
```

With that one extra line, when you add an `import kirby` line to a server block, /robots.txt will remain accessible.

