---
title: I think I need a workflow intervention (aka Stop Leaving Emacs)
date: 2025-08-21T12:46:54.000Z
slug: i-think-i-need-a-workflow-intervention
categories:
  - ''
tags:
  - Emacs
  - Obsidian
summary: >-
  Rambling about a little loop I find myself going through with Emacs vs Not
  Emacs
---

As many of you know, I sometimes, inexplicably, try to pry myself away from using Emacs. My fingers become tired of `C-c C-x foo`  or whatever, all the time. I hate typing `C-x` almost as much as `M-x`. It hurts my fingers and is too much like `C-c`. Should I hit the "x" with my middle or index finger? I want integration with macOS services. I want system-level spell checking, not `M-x ispell-word`. I want to stop thinking about whether I need `C-g` or `q` or `C-x kill-buffer` to close a minibuffer. I hate window/frame management. I want easy, basic mobile access (on my iPhone). You know, I just want to use a normal app that does normal things in a normal way[^1].

When the above feels like too much, I fire up Obsidian, because I'm convinced that Obsidian is "The Right Answer" for most people, most of the time.

For a couple of days, using Obsidian is such a relief. Everything's so easy! Linking and backlinking and searching and tagging and visualizing and organizing. Nothing feels like work. I don't get confused about key bindings. I don't lose my place. Markdown feels good and normal and fine. Who needs Org mode, anyway?! Sure, Obsidian is configurable, but why bother? All I need is a folder full of Markdown files, right?

Then it starts. I hate how Obsidian handles attachments and files, so I grab a plugin to make it work more like I want it to (e.g. more like Org mode). I want better file templates so that's another plugin. And of course I need Dataview. Shouldn't I use a nicer theme, while I'm at it? And so on.

Soon, the futzing begins in earnest. What starts out as a clean, simple markdown-based notetaking tool becomes a complex mess in short order. It's basically a shitty version of Emacs at that point. And, admit it, Obsidian feels janky. I left Emacs partly because I didn't want janky. I realize this is happening and resolve to fix it, once and for all.

So I install [Bear](https://bear.app).

Bear is simple and beautiful and an absolute joy to use. It doesn't have many features, but I don't need features, I just need a nice place to take notes. This is what I tell myself while in the back of my mind I'm wondering how to configure capture templates. And there's no daily notes feature? Really?!

Bear feels so refreshing that I can ignore all the things it doesn't do. Hell, the reason I'm here is because it doesn't do things. Who needs folders when nested tags are so much more flexible? And just _look_ at it!

Of course, while I'm not using Emacs my carefully-curated Org Agenda is not available, so I guess I need a todo app. Normally, I use OmniFocus, but since I'm in simple-and-beautiful mode, I go with Things. Having a system-wide capture key for new tasks is so nice. And, like Bear, just LOOK at it!

Shoot, I almost forgot, I need a journal app now. I launch Day One. Day One is a great journaling app. I love the "On This Day" feature and it's fun printing books from my journals. I like it so much that I'd built a tool to [convert my Org Journal entries into Day One entries](https://baty.net/posts/2025/06/importing-org-journal-to-day-one/) so I could use both. I write a couple of entries, including some photos, because I can.

Another day goes by and I continue finding other little things that I'd normally do in Emacs. I start to realize how much of my process was working fine in Emacs. Everything I need is already there. Between [Denote](https://protesilaos.com/emacs/denote), [Howm](https://github.com/kaorahi/howm), [Org Journal](https://github.com/bastibe/org-journal), and a handful of Org mode capture templates, I'm covered, workflow-wise. But I've already decided to use other, easier, more convenient tools, right?

Then, it happens. I need something that I'd written in my Denote notes so I fire up Emacs, just for a minute while I grab those notes.

It all comes rushing back: Denote, Magit, Dired, Howm, Elfeed, Mu4e, Org mode, and a dozen other little niceties that make Emacs so great, even though it's "harder" and can seem a little isolated.

I immediately burn down everything I'd cobbled together during "I Should Quit Using Emacs Week". I update my packages, pick a new theme (just so things feel fresh), and go about my business. I mean, I already had a damn good workflow built with and around Emacs for the past 10 years, didn't I?

So what I'm telling you is that I'm back in Emacs. Again.




[^1]: By "normal" I mean "The way that the rest of macOS works", of course 😁. I'm not really looking for suggestions here.
