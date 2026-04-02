---
title: Creating a WARC web archive using wget
date: 2024-03-02T10:49:22.000Z
tags:
  - Archiving
slug: creating-a-warc-web-archive-using-wget
summary: null
cover:
  image: null
  hidden: false
---


I’ve been tinkering with keeping offline copies of websites (mostly mine), and have always used either wget or httrack. I wasn’t aware of the [WARC format](https://en.wikipedia.org/wiki/WARC_(file_format)) until recently, so I thought I’d try creating a few WARC archives.

[wget](https://www.gnu.org/software/wget/), as it happens, has WARC support built in via the –warc-file option. I added that to my usual set of switches and put it all in a shell script, like so.

```sh
#!/bin/sh
# warc-archive.sh https://example.com warc-file-name

wget \
	--mirror \
	--warc-file=$2 \
	--warc-cdx \
	--page-requisites \
	--html-extension \
	--execute robots=off \
	--directory-prefix=. \
	--wait=1 \
	--random-wait \
	$1
```

This creates a compressed, self-contained WARC file along with a mirrored set of files comprising the entire site.

Actually reading the WARC files is the tricky part. As far as I can tell the easiest way is using [Replay Web.page](https://replayweb.page/). Drag the website.warc.gz file into the browser and from there you can search for documents, images, etc. and browse the site completely offline.

It’s a little convoluted and I’m still confused about what goes where, but it seems pretty handy having a single-file, self-contained, offline archive of an entire website.

