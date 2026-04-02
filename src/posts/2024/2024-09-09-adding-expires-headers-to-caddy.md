---
title: Adding Expires headers to Caddy
date: 2024-09-09T11:14:25.000Z
slug: adding-expires-headers-to-caddy
categories:
  - Tech
tags:
  - Blogging
summary: Improving site performance by adding Expires headers in my Caddy config.
cover:
  image: null
  hidden: false
  caption: null
---

<figure><img src="/img/2024/performance.png" alt=""></figure>

Performance is important, of course, but I honestly don't fuss too much over it on my sites. At least I don't let it get in the way of publishing how I want to publish. For example, I don't bother with a CDN because I don't want to futz with the links and I don't want the dependency.

Some things, though, are unintrusive while being helpful. Expires headers being one of them. I was getting "B" performance ratings, and the main culprit was a lack of expires headers, so I added them.

Here's how I did it in Caddy:

```
(static) {
	@static {
		file
		path *.js *.css *.ico *.gif *.jpg *.jpeg *.png *.svg *.woff *.woff2 *.json
	}
	header @static Cache-Control max-age=5184000
}
```

Then, in the baty.net configuration block, for example, I added an `import static` line.

Now, I'm an "A" student again.
