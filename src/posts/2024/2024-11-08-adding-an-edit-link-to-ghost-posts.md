---
title: Adding an Edit link to Ghost posts
date: 2024-11-08T16:00:39.000Z
tags:
  - ghost
slug: adding-an-edit-link-to-ghost-posts
summary: How I added a subtle link to edit the current page or post in Ghost.
cover:
  caption: null
  hidden: false
  src: /img/2024/ghost-backdoor-edit-link.webp
---

When reading one of my posts in Ghost, it would be nice if there was a quick way to get to the control panel to make edits. I _always_ make typos, but don't always catch them until later. Or I might be reading, say, the [/now](https://baty.net/now/) page and decide to update it. By default, this involves going into the control panel and browsing or searching for the post/page in order to make the edits.

I found a solution to this [on Jonas Liljegren's blog](https://blog.jonas.liljegren.org/ghost-theme-simply/). Here's my slightly modified version of their solution.

Add the following to the post.hbs template:

```html
    <div id="pi-pos">
      <a href="/ghost/#/editor/post/{{post.id}}">π</a>
    </div>
```

Add a similar one to the page.hbs template:

```html
    <div id="pi-pos">
      <a href="/ghost/#/editor/page/{{page.id}}">π</a>
    </div>
```

Then add some custom CSS:

```css
    /* Backdoor edit link */
    #pi-pos {
      position: fixed;
      bottom: 1em;
      right: 1em;
    } 
    #pi-pos a {
      position: absolute;
      bottom: -1.6px;
      right: 3.2px;
      text-decoration: none;
      color: black;
      opacity: .2;
    }
```

Now, at the bottom right of every post and page, there's a subtle `π` link that takes me directly to that content in Ghost's control panel. I've already used it several times this morning.

<iframe width="560" height="315" src="https://www.youtube.com/embed/pXPXMxsXT28?si=I7R8L0HDBi9_B2DX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
