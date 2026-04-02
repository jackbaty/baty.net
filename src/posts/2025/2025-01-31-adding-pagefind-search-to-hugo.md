---
title: Adding Pagefind search to Hugo
date: 2025-01-31T13:17:31.000Z
slug: adding-pagefind-search-to-hugo
categories:
  - Blogging
tags:
  - Hugo
---

[Pagefind](https://pagefind.app/) makes me happy. It is a static search library that is so easy to configure and use that I can hardly believe it. Here's a quick summary of how I implemented Pagefind search here in the Anubis2 Hugo theme[^1].

<!--more-->

I first created content/search.md as content for the search page. In that document I pasted the default code from the [Getting Started with Pagefind](https://pagefind.app/docs/) docs...

```html
<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>
<div id="search"></div>
<script>
    window.addEventListener('DOMContentLoaded', (event) => {
        new PagefindUI({ element: "#search", showSubResults: true });
    });
</script>
```

To build the search index, I run it via NodeJS like so:

```sh
npx -y pagefind --site public
```

That's it! That's all that is technically necessary. Running the indexer creates the index and puts the necessary support (css/js) files in public/pagefind/. Just deploy the site[^2] and visit /search.

By default, Pagefind indexes everything in the `<body>` element. That's too much, so I added `data-pagefind-body` to the element containing only the post content in the "single.html" template.

```html
<div data-pagefind-body class="content e-content">
   {{ .Content }}
</div>
```

For titles I needed `data-pagefind-meta="title"` in the `<H1>` element:

```html
<h1 data-pagefind-meta="title" class="p-name post-title{{ if .Params.favorite }} favorite{{end}}{{ if .Params.draft }} draft{{end}}">{{ trim .Title  " " | markdownify }}</h1>
```

I put a little search icon in the navigation.All this took me less than 30 minutes. It's crazy.

I'm sure I'll tweak things further, but the out-of-box experience is pretty great.

[Try it yourself](/search).




[^1]: Pagefind works with any static website. I'm using Hugo here.
[^2]: I also added the indexing step to my deployment script so that the index is always up to date.
