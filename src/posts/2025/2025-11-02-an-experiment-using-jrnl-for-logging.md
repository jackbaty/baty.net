---
title: An experiment using jrnl for logging
date: 2025-11-02T18:32:44.000Z
slug: an-experiment-using-jrnl-for-logging
description: jrnl is a nifty way to manage OBTF
taxonomies:
  tags:
    - Software
---

[Speaking of jrnl](https://baty.net/posts/2025/11/popup-jrnl-window-in-hyprland/), did I mention that I'm testing [jrnl](https://jrnl.sh/en/stable/) as my daily logging tool?

Since I'm sticking to CLI-based tools for the month, I needed a replacement for my Emacs "Daybook". My Daybook relies on all sorts of capture templates and snippets in Emacs. Since that's out, I figured I might try the One Big Text File (OBTF) approach.

By default, `jrnl` writes entries to one big text file, so it seemed suitable for this purpose.

It's only been a day or two, but I kind of dig using `jrnl` for the kinds of quick logging I normally do in Emacs. It automatically adds timestamped headings, handles @tags, uses human readable date entry (e.g. "last wednesday"), allows searching by tags or date range or content, and exports nicely to various other formats.

I might also include the entries I usually put into org-journal. I can't imagine jrnl taking org-journal's spot, but it's worth trying. I'll tag those entries as @journal and then I can export just those to markdown for conversion to PDF and printing, as one does.
