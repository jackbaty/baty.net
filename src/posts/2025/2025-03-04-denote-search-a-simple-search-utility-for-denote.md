---
title: 'Denote-search, a simple search utility for Denote'
date: 2025-03-04T11:18:09.000Z
slug: denote-search-a-simple-search-utility-for-denote
categories:
  - Software
tags:
  - Emacs
---

[lmq-10/denote-search](https://github.com/lmq-10/denote-search)

> This package provides a search utility for Denote, the simple-to-use, focused-in-scope, and effective note-taking tool for Emacs.
>
> The command denote-search is the main point of entry. It accepts a query, which should be a regular expression, and then searches the contents of all the notes stored in denote-directory for it. The results are put in a buffer which allows folding and further filtering; all standard commands offered by Xref are available as well.
>
> This package has the same code principles as Denote: to be simple-to-use, focused-in-scope, and effective. We build upon Xref to be good Emacs citizens, and don't use any dependencies other than Denote and built-in libraries.

This works pretty well. It returns a nice, foldable list of results. One can also refine the results by filtering by file names, etc. I'll probably continue using [Deadgrep](https://github.com/Wilfred/deadgrep), but denote-search is nice to have in the quiver.
