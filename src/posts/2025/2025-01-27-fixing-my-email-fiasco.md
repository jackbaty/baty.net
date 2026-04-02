---
title: Fixing my duplicate email fiasco with rmlint in Maildir
date: 2025-01-27T21:13:30.000Z
slug: fixing-my-email-fiasco
categories:
  - Software
tags:
  - Email
---


Remember my recent [email fiasco](https://baty.net/posts/2025/01/an-email-fiasco), during which I ended up with tens of thousands of duplicate emails? I remember it. After storming off and ignoring the problem for a week, I decided I should do something about it.

Today, I fixed it!

<!--more-->

Actually, a post from [Edd Salkield](https://edd.salkield.uk/about.html) fixed it: [Removing duplicate emails from an mbsync maildir](https://edd.salkield.uk/blog/2022/11/09/deduplicating_your_mbsync_maildir.html). 

Basically, the duplicate email files aren't _exact_ duplicates. Each has a unique X-TUID header line. So we remove that line on every file in a copy of the mail store so we can use [rmlint](https://github.com/sahib/rmlint) to find the duplicates. rmlint generates a script for removing the duplicate files. We run the script on the original mail store, which still has the X-TUID headers intact.

My Steps:

-   `cp -r ~/Mail ~/Mail_backup` # Make a full backup, just in case
-   `cp -r ~/Mail ~/Mail-workingcopy` # Make another copy to work with
-   `cd ~/Mail-workingcopy`
-   `find ./ -type f -exec gsed -i -e '/X-TUID/d' {} \;` # Strip the X-TUID header, which is the only differing line in otherwise duplicate files (Needed gsed on my Mac)
-   `rmlint -g --types="defaults -ed -dd"` # Run rmlint on working copy
-   Check the generated rmlint.sh file to confirm paths are absolute (mine were)
-   `gsed -i -e 's/-workingcopy//g' rmlint.sh` # Find and remove working copy suffix, making it the "real" path
-   `mv rmlint.sh ../Mail/` # move the script into the real mail store
-   `cd ~/Mail` # get ready to de-dupe
-   `./rmlint.sh -x -n` # Do a dry run of the script
-   `./rmlint.sh -x` # Go!
-   `mbsync -a` # Sync with server (be sure that --expunge-far is set)

It worked for me. I may give it a second before trying the whole muchsync thing again, but it's good to know that if I foul things up, there's a way out of it.
