---
title: Content-Security-Policy in Caddy
date: 2023-06-04T19:12:00.000Z
lastmod: 2023-06-04T19:12:10.000Z
slug: content-security-policy-in-caddy
draft: false
weight: 0
---

I noticed today that my CSP (Content-Security-Policy) Caddy's baty.net virtual host was not working. Whoops. I think I've fixed it, but if you spot any weird loading issues let me know. Here's the relevant section from my Caddyfile:

```json
header * {
    Content-Security-Policy "default-src 'self'; font-src 'self' https://fonts.gstatic.com/; style-src 'self' https://fonts.googleapis.com/;
script-src 'self' https://plausible.io; connect-src 'self'"
    Cross-Origin-Embedder-Policy "require-corp"
    Cross-Origin-Opener-Policy "same-origin-allow-popups"
    Cross-Origin-Resource-Policy "same-origin"
    Permissions-Policy "accelerometer=(self), autoplay=(self), camera=(self), cross-origin-isolated=(self), display-capture=(self), encrypted-media=(self), fullscreen=(self), geolocation=(self), gyroscope=(self), keyboard-map=(self), magnetometer=(self), microphone=(self), midi=(self), payment=(self), picture-in-picture=(self), publickey-credentials-get=(self), screen-wake-lock=(self), sync-xhr=(self), usb=(self), xr-spatial-tracking=(self)"
    Server "baty.net"
    Strict-Transport-Security max-age=31536000;
    X-Content-Type-Options nosniff
    X-Frame-Options DENY
    X-XSS-Protection "0"
}
```

FWIW, I'm back to an "A" rating at [securityheaders.com](https://securityheaders.com/?q=https%3A%2F%2Fbaty.net&followRedirects=on).


[//]: # "Exported with love from a post written in Org mode"
[//]: # "- https://github.com/kaushalmodi/ox-hugo"
