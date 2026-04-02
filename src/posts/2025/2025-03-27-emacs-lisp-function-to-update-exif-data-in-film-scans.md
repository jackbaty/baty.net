---
title: Emacs lisp function to update exif data in film scans
date: 2025-03-27T14:17:30.000Z
slug: emacs-lisp-function-to-update-exif-data-in-film-scans
categories:
  - Photography
tags:
  - Photography
  - AI
cover:
  image: null
  alt: null
  caption: null
---

I maintain a list of shell commands for updating Make/Model/Lens information in film scans. I've always run this via babel in a code block in an Org mode file. Something like this:

```emacs-lisp
#+begin_src sh
  cd ~/Pictures/_Scans
  exiftool '-m' '-Make=Leica' '-Model=Leica MP' -overwrite_original .
  exiftool '-m' '-LensModel=Summilux-M 1:1.4/50 ASPH' '-FocalLength=50mm' -overwrite_original .
#+End_src
```

Easy enough, I just copy and paste from a list of commands, depending on the lens and camera. However, it occurred to me that I'd prefer to simply have Emacs prompt me for the information, and then take care of the shell commands for me. Also, instead of hard-coding the path, I wanted to use marked files in a Dired buffer.

I had no idea how to approach this, so I tucked my tail between my legs and asked ChatGPT.

> Write an emacs lisp function that, when run in a dired buffer, prompts me for a camera model (from a predefined list of models) and then uses exiftool to set the Make and Model fields of the marked files using my selection.

It worked, first try, but I'd forgotten about the lens options, so I followed up with:

> Can you modify it so that I also select a lens and so that the lens information includes focal length?

In 20 seconds, with only a couple of small tweaks, I had a working solution. The only thing for me to do was put my options into `camera-list` and `lens-list`.

```emacs-lisp
(defun my/dired-set-exif-camera-lens ()
  "Set the Make, Model, Lens, and Focal Length of marked files in Dired using exiftool."
  "Written (mostly) by ChatGPT"
  (interactive)
(let* ((camera-list '(("Leica MP" . "Leica")
                      ("Leica M3" . "Leica")
                      ("Nikon FM2n" . "Nikon")
                      ("Hasselblad 500C/M" . "Hasselblad")
                      ("Olympus OM2n" . "Olympus")))
       (lens-list '(("Summilux-M 1:1.4/50 ASPH" . "50mm")
                      ("Summilux-M 1:1.4/35 ASPH FLE" . "35mm")
                      ("Zeiss Planar f/2.8 80mm" . "80mm")
                      ("Nikkor f/2.5 105mm" . "105mm)))
         (camera-choice (completing-read "Select Camera Model: " (mapcar #'car camera-list)))
         (lens-choice (completing-read "Select Lens: " (mapcar #'car lens-list)))
         (make (cdr (assoc camera-choice camera-list)))
         (focal-length (cdr (assoc lens-choice lens-list)))
         (files (dired-get-marked-files)))
    (dolist (file files)
      (shell-command (format "exiftool -Make=\"%s\" -Model=\"%s\" -LensModel=\"%s\" -FocalLength=\"%s\" \"%s\" -overwrite_original"
                             make camera-choice lens-choice focal-length file)))
    (revert-buffer))) ;; Refresh Dired buffer to reflect changes
```

I'm as skeptical as the next person about LLM use, but it's hard to argue with its efficacy for small tasks like this. I'm sure an expert in lisp could do better, but I'm not, and I didn't have to be one. This is a vast improvement over the way I used to do it and getting here saved me hours of fumbling around.
