---
title: Printing my 2024 calendars using pcal
date: 2023-12-28T11:22:17.000Z
tags:
  - Software
  - Workflow
categories:
  - Tech
summary: Generating yearly and monthly calendars using Pcal on the command line
slug: printing-my-2024-calendars-using-pcal
---

I keep printed calendars for the current year and month pinned above my desk. It's often easier to just glance up to see dates than to open a calendar on the computer/phone.

I used to use [timeanddate.com](https://timeanddate.com) and that works great, but I'm now using [pcal](https://pcal.sourceforge.net/) because it's...nerdier I guess?

Here's the shell script for the yearly calendar (I just execute it within Emacs). It runs pcal with some options, then converts the postscript to PDF, then opens in it Preview.

<figure><img src="/img/2023/pcal-year.png" alt=""><figcaption>Pcal script for yearly calendar</figcaption></figure>

And here's the one for only the month of January.

<figure><img src="/img/2023/pcal-month.png" alt=""><figcaption>Pcal script for monthly calendar</figcaption></figure>


I like that I can include a little note in the footer (e.g. "Reduce and Simplify").

The output for the monthly PDF looks like this:

<figure><img src="/img/2023/calendar.png" alt=""></figure>

