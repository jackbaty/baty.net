---
title: Images in Hugo RSS feeds
date: 2023-10-06T13:06:14.000Z
slug: images-in-hugo-rss-feeds
tags:
  - blogging
  - hugo
summary: How to fix URLs in RSS feeds when using relative paths in page bundles in Hugo
---

By default, when showing full content in Hugo's RSS feeds, image links from posts using page bundles don't work. If that means nothing to you, maybe skip this one.

I've "solved" the same broken image problem at least 3 times when moving my blog to Hugo, so I thought I'd write it down for once.

The problem begins with the fact that Hugo's built in RSS template uses the post's Summary rather than its Content. The only way around this is to override the built-in template with a version that replaces...

`<description>{ { .Summary | html } }</description>`

with...

`<description>{ { .Content | html } }</description>`

Seems like that should be doable out of the box, but nope, so I copy/paste/edit.

For posts with images, especially if they have more than one, I like to use Hugo's [page bundles](https://gohugo.io/content-management/page-bundles/) features. This offers advantages such as the ability to use relative paths for images. If I put a "portrait.jpg" file in the post's folder, I can reference it using `src="portrait.jpg"` and Hugo figures it all out. Except in the RSS feeds. The image URLs end up relative, which make no sense in RSS. To fix this, I create my own short code for "figure". To differentiate it from any built-in or theme-specific figure short codes, I named mine "bfigure" (mnemonic: "bundle figure"). It's cobbled together from a dozen old forum and blog posts (that I didn't record, sorry), and it looks like this:

```
{ { $imgname := .Get "src" } }
{ { $title := .Get "title" } }
{ { $caption := .Get "caption" } }
{ { $alttext := default $caption (.Get "alt") } }
{ { $width := .Get "width" } }
{ { $height := .Get "height" } }
{ { $img := $.Page.Resources.GetMatch $imgname } }
{ { $class := .Get "class" } }
<figure>
	<img src="{ { $img.Permalink } }"
	     alt="{ { $alttext } }"
	     { { with $width } } width="{ { $width } }"{ { end } }
	     { { with $height } } height="{ { $height } }"{ { end } }
	     { { with $class } } class="{ { $class } }"{ { end } }/>
	{ { with $caption } }<figcaption>
		{ { with $title } }<strong>{ { $title } }</strong>{ { end } }
		{ { with $caption } }<p>{ { $caption } }</p>{ { end } }
	</figcaption>{ { end } }
</figure>
```

Call it like this (spaces added so it renders here correctly):

`{ { < figure src="photo.jpg" caption="This is a caption" > }}`

This covers everything I might need for rendering a figure element. I almost always include a caption, but sometimes get lazy and forget the Alt attribute (sorry!), so I've made this so that if I don't include Alt, it gets set to the caption.

Here's a test. If you can see this via RSS you'll know it worked.

> [!NOTE] I removed it
> We're not on Hugo as of October 1, 2024, so this test is meaningless

This does not do srcsets, so I'll have to get to that later.

If y'all know of a cleaner way to do this, I'm all ears.


