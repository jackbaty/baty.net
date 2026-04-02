---
title: Searching in Mutt with Notmuch
date: 2024-02-14T11:10:05.000Z
tags:
  - Email
  - Mutt
slug: searching-in-mutt-with-notmuch
summary: Notmuch can be used as a search engine from within Mutt and it's super fast.
cover:
  image: null
  hidden: false
---

<figure><img src="/img/2024/mutt.png" alt=""></figure>


I'm on a [Mutt](https://mutt.org) kick again lately. One thing I've never loved about Mutt is that searching large archives can be slow. I'm used to the nearly instantaneous response when using [Notmuch](https://notmuchmail.org/) for search. To help with this, I've switched to using [NeoMutt](https://neomutt.org/), which has some nice built-in support for Notmuch.

Here is the relevant portion of my .muttrc file.

```
set nm_db_limit = 5000
set nm_default_url = "notmuch:///Users/jbaty/Mail"
set nm_open_timeout = 5
set virtual_spool_file = yes
set nm_query_window_enable=yes
set nm_query_window_duration=2
set nm_query_window_timebase="month" # or "hour", "day", "week", "month", "year"
set nm_query_window_or_terms="tag:unread and tag:flagged"
# read entire thread of the current message
bind index,pager + entire-thread
# generate virtual folder from query
bind index,pager \cf vfolder-from-query
bind index < vfolder-window-backward
bind index > vfolder-window-forward
```

Another fun thing in NeoMutt is that it has incorporated virtual-folders, so I can do things like this:

```
virtual-mailboxes "Flagged" "notmuch://?query=tag:flagged"
virtual-mailboxes "Today" "notmuch://?query=date:today"
```

So far it works a treat. Searches are so fast in Notmuch! I like that I can limit the initial results to a specific time window (via `nm_query_window_timebase`). I use "month". Then, I can page through a month of results at a time using <kbd><kbd><</kbd></kbd> and <kbd><kbd>></kbd></kbd>.

