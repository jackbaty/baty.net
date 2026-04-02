---
title: GoAccess and HTTP Protocols
date: 2025-01-07T20:36:40.000Z
slug: go-access-and-http-protocols
categories:
  - Software
---

Using [GoAccess](https://goaccess.io/) to process my web server logs is going fine. It's nice not paying for an analytics service, but it's definitely a messier process.

I wrote a little about [Filtering server logs for use with GoAccess](https://baty.net/posts/2024/12/filtering-goaccess-logs) recently, but have since tweaked things a little.

One thing I found annoying was that GoAccess reports requests separated by HTTP protocol. So HTTP2 and HTTP1.1 requests are counted separately. Not what I wanted, so I discovered `--http-protocol no` and `--http-method no`. I'm always going to want this, so I added the following to /etc/goaccess/goaccess.config

```sh
    http-protocol false
    http-method   false
```

Now the requests are combined, making the reports more useful to me.
