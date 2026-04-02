---
title: Editing Hugo's Markdown directly (not using ox-hugo)
date: 2023-06-22T18:03:44.000Z
slug: editing-hugos-markdown-directly
categories:
  - ''
tags:
  - Hugo
  - Blogging
  - Emacs
---

I have been wondering if the benefits of using [ox-hugo](https://ox-hugo.scripter.co/) just so I can write posts using Org-mode format is worth the extra layer of abstraction. I prefer Org-mode to Markdown, but Markdown is fine. In fact,  [Markdown-mode](https://jblevins.org/projects/markdown-mode/) makes editing Markdown in Emacs quite pleasant. Ox-hugo is a great package, but increasingly seemed like a clever but unnecessary abstraction. One of its best features is that it makes creating new posts super easy. I never liked using the Hugo CLI, so ox-hugo solved that problem.

I started looking for a way to make generating posts easier, but without using Hugo. At first I figured I would need some kind of wrapper around the CLI's `hugo new post/...` command, but then wondered if I should do something right within Emacs. I mean, someone's had to solve this problem before, right?

I'd used a package called [Easy Hugo](https://github.com/masasam/emacs-easy-hugo) before, but it's way overkill for what I need.

After a brief search, I spotted a [post from Jeremy Friesen](https://takeonrules.com/2021/05/20/emacs-function-to-rename-hugo-blog-post/#tor-post-new) which included a function that does something very close to what I needed. (Thanks, Jeremy!).

My theme at the time of this writing is Congo. Congo pushes one toward using Hugo bundles for posts, meaning rather than posts being in a file named `my-blog-post.md` I need to name them `index.md` in a folder for each post. I tweaked Jeremy's code a bit and now I can just call `jab/post-new` and I instantly get the proper folder, file, and front matter and can simply start typing. Here's the code:

```lisp
(defun jab/post-new (title &optional)
  "Create and visit a new draft blog post for the prompted TITLE."
  (interactive "sTitle: ")

  (let* ((slug (s-dashed-words title))
         (default-directory (concat "~/sites/blog/content/posts/"
                                    (format-time-string "%Y/%m-%B/%Y-%m-%d-")
                                    slug "/"))
         (fpath (concat default-directory "index.md")))
         
    (make-directory default-directory)
    (write-region (concat
                   "---"
                   "\ntitle: '" title "'"
                   "\ndate: " (format-time-string "%Y-%m-%d %H:%M:%S %z")
                   "\nslug: " slug
                   "\ncategories: [\"\"]"
                   "\ntags: [\"\"]"
                   "\ndraft: true"
                   "\n---\n")
                  nil (expand-file-name fpath) nil nil nil t)
    (find-file (expand-file-name fpath))))
```

I create two slightly different kinds of posts, regular posts (which are created using the above function) and "journal" posts, which use a different file name and URL structure. Rather than modifying the existing functions with a bunch of conditionals, I did what all professional programmers do, I copied and pasted the existing function and tweaked it to suit. It's called `jab/post-daily` and looks like this:

```lisp
(defun jab/daily-new ()
  "Create and visit a new j blog post for the prompted TITLE."
  (interactive)

  (let* ((slug (concat (format-time-string "%Y-%m-%d") "-journal"))
         (default-directory (concat "~/sites/blog/content/posts/"
                                    (format-time-string "%Y/%m-%B/")
                                    slug "/"))
         (fpath (concat default-directory "index.md")))
         
         (make-directory default-directory)
    (write-region (concat
                   "---"
                   "\ntitle: '" (format-time-string "%A, %B %d, %Y") "'"
                   "\ndate: " (format-time-string "%Y-%m-%d %H:%M:%S %z")
                   "\nslug: " slug
                   "\ncategories: [\"Journal\"]"
                   "\ntags: [\"\"]"
                   "\ndraft: true"
                   "\n---\n")
                  nil (expand-file-name fpath) nil nil nil t)
    (find-file (expand-file-name fpath))))
```

The only real difference is the folder name and slug are different and the title is pre-determined so there's no need for a prompt.

I'll miss the one-post-per-heading-in-one-big-file approach of ox-hugo, but editing the Markdown files directly has fewer dependencies and feels cleaner to me.

