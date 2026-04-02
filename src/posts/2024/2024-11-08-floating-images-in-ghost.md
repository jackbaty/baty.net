---
title: Floating images in Ghost
date: 2024-11-08T15:56:45.000Z
tags:
  - blogging
  - ghost
slug: floating-images-in-ghost
summary: null
---

There is no built-in method in [Ghost](https://ghost.org/) for floating an image and having text flow around it. It's a significant omission, and one which they say is "too hard" and have no plans to change. OK fine, I'll do it myself.

I found a reasonable solution in [this post](https://forum.ghost.org/t/why-is-there-no-wrap-image-in-text-option/22603/5) on the forums. Here's how I'm using it.

Add the following to the header in the code injection area:

```css
/* small images to float but not look stupid on mobile */
@media (min-width: 40rem) {

.float-left-half figure,
.float-left-two-thirds figure {
    float: left;
    margin: 8px 20px 6px 0;
}
.float-right-half figure,
.float-right-two-thirds figure {
    float: right;
    margin: 8px 0 6px 20px;
}
.float-left-half figure,
.float-right-half figure {
    max-width: 50%;
}
@media (min-width: 64em) {
	.float-left-two-thirds figure,
	.float-right-two-thirds figure {
    	max-width: 67%;
    }
}

}
```

Then, in a post or page, I add an HTML block before the image card I want to float (e.g to the right).

    <span class="float-right-half">

Then close the `</span>` after the image card.


