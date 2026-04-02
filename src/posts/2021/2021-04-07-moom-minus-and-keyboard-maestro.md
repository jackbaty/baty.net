---
title: 'Moom, Minus, and Keyboard Maestro'
date: 2021-04-07T08:17:04.000Z
url: /2021/moom-minus-and-keyboard-maestro/
categories:
  - Misc
tags:
  - Tech
  - Workflow
slug: moom-minus-and-keyboard-maestro
---
<!--kg-card-begin: html-->Using a single 32-inch monitor with my M1 Mac Mini has caused me to re-think how I manage apps and windows. After a few iterations, I&#8217;ve settled on the following layout.

<div class="wp-block-image">
  <figure class="aligncenter"><img loading="lazy"  src="/img/2021/04/2021-04-07_desktop.png" alt=""  /></figure>
</div>

This layout includes Finder, iTerm2, Safari, and Emacs. Safari takes up the majority of the center. Finder and iTerm are split equally on the left, and Emacs is on the right, divided into two windows (or &#8220;panes&#8221; as most other software calls them). All my most-used apps are visible at the same time and I&#8217;m not constantly moving windows around.

I love this setup, but sometimes I need to resize things so they better fit the content or maybe move an app out of the way for a minute. I use [Moom][1] to put everything back for me.

I had switched to [Rectangle][2] from Moom earlier this year, as it&#8217;s simpler and a little snappier, but Rectangle doesn&#8217;t (as far as I know) do custom window layouts, so I moved back to Moom. Now I arrange my windows exactly how I want them, save the arrangement in Moom, and assign it a keyboard shortcut for easy recall. This lets me clean up my windows quickly and get everything back where it belongs.

I recently learned about [Minus][3]: &#8220;Zero distractions, One task + Extra superpowers&#8221; and initially scoffed at it. I&#8217;ve always considered apps meant to reduce distractions to be gimmicks and never found them useful. I tried Minus anyway, and it&#8217;s turned out to be great.

Minus is not something I expected to find useful, but it really has made a difference. It has configurable &#8220;Desktop Environments&#8221; that will configure my Mac in a number of helpful ways. My default environment configuration does the following:

  * Hides all apps
  * Switches to a specific, simple wallpaper
  * Hides desktop icons
  * Turns on &#8220;Auto-hide&#8221; for the Dock
  * Turns on &#8220;Auto-hide&#8221; for the menu bar
  * Enables Do Not Disturb
  * Closes all &#8220;Distractions&#8221;

Here is what the settings panel looks like:

<div class="wp-block-image">
  <figure class="aligncenter"><img loading="lazy" src="/img/2021/04/2021-04-07_minus.png" alt=""  /></figure>
</div>

And here&#8217;s what my screen looks like after triggering Minus (by hitting `CMD-ESC`) and then bringing Emacs to the front so I could continue writing this post:

<div class="wp-block-image">
  <figure class="aligncenter"><img loading="lazy" src="/img/2021/04/2021-04-07_writing.png" alt=""  /></figure>
</div>

Ahhh, so quiet and uncluttered.

Minus lets me define &#8220;Distractions&#8221; and will let me know when I venture off into places I&#8217;ve told it I shouldn&#8217;t. For example, if I visit Twitter the entire screen will go all gray and display a distraction warning. My options are to close the distraction or, if I really want to check Twitter, snooze the alert. This feature has made me painfully aware of how often I drift off into social media land. Minus has a few other features that I don&#8217;t use or need, but it&#8217;s been great at helping me keep things tidy and focused.

Tying all this together is [Keyboard Maestro][4]. I use a KM macro to make sure all the relevant apps are running, trigger Moom, and activate a specific tab in Safari. Here&#8217;s the macro:

<div class="wp-block-image">
  <figure class="aligncenter"><img loading="lazy" width="781" height="592" src="/img/2021/04/2021-04-07_km.png" alt=""  /></figure>
</div>

So at any time, I can hit `Command-Option-Shift-M` and everything is reset and ready to go. Or, I can just activate Minus (via mouse or `Command-Escape`) and have completely tidy blank slate to start with.

<!--kg-card-end: html-->

 [1]: https://manytricks.com/moom/
 [2]: https://rectangleapp.com
 [3]: https://www.minus.app
 [4]: https://www.keyboardmaestro.com/main/
