---
title: Searching baty.net
date: 2024-10-12T06:20:10.000Z
slug: searching-baty-net
tags:
  - meta
summary: null
cover:
  image: null
  caption: null
---


I've added a [search page](/search). It uses [Pagefind](https://pagefind.app). It turns out I'd already begun work on this with the original site. The clue was a commented-out line in my Makefile:

```makefile
index:
        npx -y pagefind --site ${SITE_DIR}
```

All I needed to do was create a search page and add a snippet:

```html
---
layout: layouts/base.njk
title: Search
slug: /search
---

<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#search", showSubResults: true, pageSize: 10, autofocus: true });
    });
</script>
```

To manually build the index, I render the site and then index it. using `npx -y pagefind --site _site`. I do this as part of the deploy recipe in the [Makefile](https://github.com/jackbaty/baty.blog-11ty/blob/main/Makefile).

That was easy enough. I'll fart around with the indexing a bit, but otherwise it works really well right out of the box.
