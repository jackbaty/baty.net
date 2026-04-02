---
title: CalDAV to my Emacs Diary
date: 2025-09-29T21:33:37.000Z
slug: cal-dav-to-my-emacs-diary
categories:
  - ''
tags:
  - ''
summary: How I'm pulling my Fastmail calendar entries into Emacs diary entries.
cover:
  image: null
  alt: null
  caption: null
---

Please, there must be a thousand ways to do this that I haven’t discovered. If you know of anything simpler, I’m all ears. The following is a quick-and-dirty summary of how I did it.

> [!NOTIFY] 👉 **Update: Sebastián to the rescue with his cdsync package**
> Seb let me know about his package that does all this and more: [cdsync](https://git.sr.ht/~sebasmonia/cdsync.el)

I use the [Emacs Diary](https://www.gnu.org/software/emacs/manual/html_node/emacs/Diary.html) all the time. I prefer it to using only Org-mode dates in my agenda. The tricky piece is getting the stuff from my CalDAV (Fastmail) calendar into the diary.

Hanno’s post, [Managing calendar events in Emacs](https://www.hoowl.se/khalel.html) got me started. Their post is more geared toward Org dates, but it gave me a good leg up.

Basically, it’s this:

1.  Sync using [vdirsyncer](https://vdirsyncer.pimutils.org/en/stable/index.html)
2.  Convert using [khal](https://khal.readthedocs.io/en/latest/index.html)
3.  Include converted entries in my diary file

I installed vdirsyncer and khal via Pacman (Omarchy)

Here’s my `~/.config/vdirsyncer/config`:

```
[general]
# A folder where vdirsyncer can store some metadata about each pair.
status_path = "~/.vdirsyncer/status/"

# CALDAV
[pair jack_calendar]
a = "jack_calendar_local"
b = "jack_calendar_remote"
collections = ["from a", "from b"]

# Calendars also have a color property
metadata = ["displayname", "color"]

[storage jack_calendar_local]
type = "filesystem"
path = "~/.calendars/"
fileext = ".ics"

[storage jack_calendar_remote]
type = "caldav"
url = "https://my.caldav.account"
username = "nerd@example.com"
password = "averylongpasswordreally"
```

I ran `vdirsyncer discover` once and then `vdirsyncer sync` and it pulled my calendars down into `~/.calendars/`

vdirsyncer creates .ics calendar files, which aren’t useful for Emacs Diary. That’s where [khal](https://khal.readthedocs.io/en/latest/index.html) comes in.

My `~/.config/khal/config` file:

```
[calendars]

[[main]]

  path = "~/.calendars/699f44f9-799a-4325-9328-aff622023096/"
  color = dark green

[[other]]
  path = "~/.calendars/2e7d0c52-d5c7-4e6a-aa2e-01f8eb84a515/"

[locale]

  dateformat = %Y-%m-%d
  timeformat = %H:%M
```

That tells khal where the calenders are, and sets up a usable output format for use in the Emacs Diary. The following command is where I landed.

```
khal list --format "{start-date} {start-time}-{end-time} {title}" \
      --day-format "" \
      today 10d >~/.config/emacs-mine/caldav-diary
```

It generates a list of calendar events from today until 10 days from now and puts the results into a file that I use as part of my Emacs Diary. Just make sure that includes are enabled:

```
(add-hook 'diary-list-entries-hook 'diary-include-other-diary-files)
```

Then, in my main diary files, I added the include line:

```
#include "/home/jbaty/.config/emacs-mine/caldav-diary"
```


<figure><img src="/img/2025/agenda.jpg" alt="Screenshot of my agenda"><figcaption>Events from CalDAV on my Org agenda</figcaption></figure>

And boom! My Fastmail calendar shows up in my Org Agenda.

I’m not worrying about syncing the other direction, yet.
