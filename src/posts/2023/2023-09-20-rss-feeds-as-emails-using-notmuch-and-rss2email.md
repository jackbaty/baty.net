---
title: RSS feeds as emails using Notmuch and rss2email
date: 2023-09-20T14:30:31.000Z
slug: rss-feeds-as-emails-using-notmuch-and-rss2email
categories:
  - Emacs
tags:
  - Emacs
  - RSS
  - Email
  - Notmuch
summary: Could I too start storing things as email and find them later using Notmuch?
draft: false
---

I’m all-in with Emacs after once again [failing to get along with Obsidian](https://daily.baty.net/posts/2023/09/16/Out-with-Obsidian.html).

I’d stopped using [Notmuch](https://notmuchmail.org/) in Emacs for email, but I brought it back after re-reading Paul Ford’s article in Wired: [I Finally Reached Computing Nirvana](https://www.wired.com/story/i-finally-reached-computing-nirvana-what-was-it-all-for/).

Could I too start storing things as email and find them later using Notmuch?

So far, I’ve solved RSS feeds. Rather than reading feeds in NetNewsWire or Elfeed, I’m using [rss2email](https://pypi.org/project/rss2email) to convert RSS feeds to emails and reading them in Notmuch.

A good reference for getting started with rss2email is LinuxBabe’s [How to Install and Use rss2email on Ubuntu](https://www.linuxbabe.com/ubuntu/install-use-rss2email-ubuntu-18-04)

The tricky part of rss2email is actually sending the emails. I eventually got things working using msmtp, which would have been fine, but it’s a lot of extra hoohah. If only I could save the RSS items directly into Notmuch. Guess what, I can!

rss2email supports writing to Maildir files. It was as easy as adding the following to my rss2email config:

```
email-protocol = maildir
maildir-path = ~/Mail
maildir-mailbox = Feeds
```

rss2email supports importing OPML files, but I decided to clean things up and add feeds one at a time, like this:

`r2e add BatyBlog https://baty.blog/feed.rss`

Then, when I want to read my feeds I run `r2e run` and everything ends up right in Notmuch. I don’t want them tagged with “inbox” along with my real email, so I added a filter to the post-new hook in Notmuch.

`notmuch tag +feed -inbox -- '(from:jack+rss@baty.net)'`

I have the rss2email sender configured as [jack+rss@baty.net](mailto:jack+rss@baty.net) so it’s easy to filter just those messages. With that hook, new RSS feed items do not appear in the inbox, but I can easily read them in Notmuch by searching for `tag:feed AND tag:unread`.

So there, I’ve moved my RSS feeds into emails and manage them via Notmuch.
