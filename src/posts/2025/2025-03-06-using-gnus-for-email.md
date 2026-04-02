---
title: Using Gnus for email
date: 2025-03-06T10:39:15.000Z
slug: using-gnus-for-email
categories:
  - Software
tags:
  - Emacs
  - Email
---

A week ago, I toyed with the idea of using [Gnus](https://www.gnu.org/software/emacs/manual/html_node/gnus/index.html#SEC_Contents) for reading Email in Emacs.

As expected, I hated it at first. But then...

<figure><img src="/img/2025/mastodon.png" alt=""></figure>

<!--more-->

----

<img src="/img/small/gnus.png" class="small-image-right">

Gnus is a newsreader that can be coerced into pretending it's an email client. There's no getting around this masquerade and it feels awkward. On the other hand, it's a _powerful_ news reader pretending to be an email client.

I don't manage a ton of email, so experiments with how I deal with it aren't high risk. Still, [my recent email fiasco](/posts/2025/01/an-email-fiasco/) made me nervous. It also what got me looking into using Gnus. 

Most of the time, I read email on my desktop Mac. I've been using [Notmuch](http://notmuchmail.org) for this. The problem is that the Notmuch database is then tied to that computer. I was eventually able to configure [muchsync](https://www.muchsync.org) so that I could read everything on my laptop (MBP) as well. It was working, but felt fragile and the process would often fail for various reasons. 

The other place I manage email is of course on my phone. Notmuch isn't an option there, so I use Apple Mail. As I wrote in [I think I have to go back to Mu4e](/posts/2025/02/i-think-i-have-to-go-back-to-mu4e/), Notmuch wasn't fitting my workflow as well as I'd have liked. As I was looking at returning to Mu4e, I figured I'd play with Gnus. 

Gnus solves the sync problem because it feeds directly off the IMAP server (Fastmail, in my case). Using Gnus, not only do I not worry about syncing between Macs, I don't even need to sync to my desktop Mac, at all[^1].

Long story short, I've stuck with Gnus for the past week and I'm kind of digging it. Once one gets past the weird terminology (Groups, Articles, Dormant, Ticked, etc.) it's actually very powerful.

I cobbled together my configuration from a half-dozen Stack Exchange answers and blog posts[^2], with some tweaks from me. It ain't pretty, but it's working. I'm not even sure what some of it is doing, but here's most of it:

```emacs-lisp
(use-package gnus
  :bind
  (("C-c o g" . gnus)
  (:map gnus-group-mode-map
    ;; I like seeing all mailboxes, not just those with unread messages
	("o" . my/gnus-group-list-subscribed-groups))
  (:map gnus-summary-mode-map
    ;; Move message to "Archive" folder
	("C-c a" . my/gnus-summary-archive)))
 
  :custom
  ;; Archive outgoing email in Sent Items folder, mark it as read
  ;; UPDATE: Do I need this? Fastmail saves Sent items automatically
  ;;   (gnus-message-archive-method '(nnimap "personal"))
  ;;   (gnus-message-archive-group "Sent Items")
   (gnus-message-archive-group (format-time-string "sent.%Y")) ;; keep local copy
   (gnus-gcc-mark-as-read t)
   (gnus-search-use-parsed-queries t)  ;; standardize searches
   (gnus-auto-select-next nil)
   (gnus-paging-select-next nil)
   (gnus-summary-stop-at-end-of-message t)
   (gnus-mime-display-multipart-related-as-mixed t)
   (gnus-auto-select-first nil)
   (gnus-summary-display-arrow nil)
   (gnus-thread-sort-functions
      '(gnus-thread-sort-by-most-recent-date
        (not gnus-thread-sort-by-number)))
   (gnus-show-threads t)
   (gnus-sum-thread-tree-false-root nil) ;; use subject
   (gnus-sum-thread-tree-root nil)
   (gnus-sum-thread-tree-indent " ")
   (gnus-sum-thread-tree-vertical        "│")
   (gnus-sum-thread-tree-leaf-with-other "├─► ")   ;; fancy
   (gnus-sum-thread-tree-single-leaf     "╰─► ")
   ;; |2025-03-06 (Thu)| Sender Name | Subject |
   (gnus-summary-line-format (concat
                             "%0{%U%R%z%}"
                             "%3{│%}%1{%&user-date;%}%3{│%}" ;; date
                             "%ub:"          ;; indicate (+) if known (bbdb)
                             "%4{%-20,20f%}" ;; name
                             " "
                             "%3{│%}"
                             " "
                             "%1{%B%}"
                             "%s\n"))
   
   (gnus-user-date-format-alist '((t . "%Y-%m-%d (%a)")
                                 gnus-thread-sort-functions '(gnus-thread-sort-by-date)))
   :config
    (setq gnus-select-method '(nnnil ""))
    (setq gnus-secondary-select-methods  '((nnimap "personal"
	                                       (nnimap-address "imap.fastmail.com")
                                           (nnimap-server-port 993)
                                           (nnimap-stream ssl)
			                   (nnmail-expiry-target "nnimap+personal:Trash")))))


;; Send email via Fastmail's SMTP:
(use-package smtpmail
  :custom
  (send-mail-function 'smtpmail-send-it)
  (smtpmail-default-smtp-server "smtp.fastmail.com")
  (smtpmail-stream-type 'ssl)
  (smtpmail-smtp-service 465))

   ```
   
I've configured [BBDB](https://elpa.gnu.org/packages/bbdb.html) (Insidious Big Brother Database) for contact management.
   
```emacs-lisp
(use-package bbdb :ensure t
  :config
  ;; initialization for both Gnus and Notmuch
  (bbdb-initialize 'gnus 'message 'notmuch)
  (bbdb-mua-auto-update-init 'gnus 'message 'notmuch)

  ;; When invoking bbdb interactively
  (setq bbdb-mua-update-interactive-p '(query . create))

  ;; Check every address in a message and not only the first
  (setq bbdb-message-all-addresses t)

  ;; use ; on a message to invoke bbdb
  (add-hook 'gnus-summary-mode-hook
	    (lambda ()
	      (define-key gnus-summary-mode-map (kbd ";") 'bbdb-mua-edit-field)))

  (add-hook 'gnus-startup-hook 'bbdb-insinuate-gnus)
  (add-hook 'gnus-startup-hook 'bbdb-insinuate-notmuch)
  (setq bbdb-complete-name-allow-cycling t))

```

Using BBDB is neat because when I'm viewing a message, a small window pops up at the bottom with that person's info. One nice feature is that, in the list of messages (Summary view), a "+" symbol is displayed before the name of people who are already in BBDB. (This is via `%ub` in the format string). Plus, Notmuch and Gnus can share the contact database. BBDB was initially developed by [Jamie Zawinski](https://www.jwz.org/hacks/).

> In 1991, I wrote this program, "The Insidious Big Brother Database", which was an address-book and note-taking system that was tightly integrated with the Emacs mail and news readers. It was pretty popular until 1997 or so when even the last hold-outs stopped reading their mail in Emacs.

Well, not _everyone_ stopped :).

I'm still very clumsy using Gnus, but it's been a blast to learn and play with. Part of the attraction is that it's built into Emacs and needs nothing else to work. It's nice not having to deal with sync or external dependencies. I admit that I also like that it's really really old and feels almost rebellious to use.

[^1]: That said, I am still syncing and keeping the Notmuch database up to date, because I like having a local copy of all my email. Also, who knows how long I'll be using Gnus?

[^2]: This one was especially helpful: [A Practical Guide to Gnus](https://github.com/redguardtoo/mastering-emacs-in-one-year-guide/blob/master/gnus-guide-en.org)
