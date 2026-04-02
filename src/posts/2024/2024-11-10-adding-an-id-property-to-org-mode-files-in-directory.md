---
title: Adding an ID property to Org-mode files in directory
date: 2024-11-10T16:08:11.000Z
tags:
  - Emacs
slug: adding-an-id-property-to-org-mode-files-in-directory
summary: >-
  I wanted to add an :ID: property to several hundred files, but only if one
  didn't already exist. I cheated and asked ChatGPT for help. It helped.
---


This is a bit esoteric, but I'm writing it down here anyway.

I have switched between using [Denote](https://protesilaos.com/emacs/denote) and [Org-roam](https://www.orgroam.com/) for my Org-mode notes several times. They are mostly compatible, so this hasn't been too troublesome.

One thing I needed to do was make sure that all the .org files included an :ID: property at the top so that Org-roam includes them in its database. The ID property looks like this:


    :PROPERTIES:
    :ID:       4def7046-3ef8-4436-a079-09362bf66aff
    :END:
    

Many of my Denote files already include this because I like to drag and drop files and images into the notes, and the ID property makes this work correctly. But there were maybe 300 files without an ID, and I had no desire to add the property manually to every one of them.

I started to write a shell script to do this, but got hung up on some bit of syntax, so I searched for the error and found the fix. Then I had trouble with the `sed` command, etc. 

Sometimes I forget that ChatGPT exists. Sometimes I ignore it because I want to learn stuff on my own. But sometimes I just want the answer, and, problematic as LLMs can be, there's no denying their usefulness.

A couple of prompts, a few iterations, and I had what I needed in about 10 minutes.

```sh
#!/bin/bash

# Directory containing the Org-mode files
ORG_DIR="${1:-.}" # Defaults to current directory if not provided

# Loop through all .org files in the specified directory
for file in "$ORG_DIR"/*.org; do
	# Skip if no Org-mode files are found
	[ -e "$file" ] || continue

	# Check if the :ID: property exists in the first 5 lines
	if ! head -n 5 "$file" | grep -q "^:ID:"; then
		# Generate a unique ID (UUID)
		id=$(uuidgen)

		# Create the :PROPERTIES: block with the :ID:
		properties_block=":PROPERTIES:\n:ID: $id\n:END:"

		# Insert the :PROPERTIES: block at the very top of the file
		gsed -i "1i $properties_block" "$file"

		echo "Added :ID: $id inside a :PROPERTIES: block to $file"
	else
		echo ":ID: already exists in the first 5 lines of $file"
	fi
done
```

The only change I needed to make was to substitute  `gsed` for `sed`because the macOS version of sed was missing a switch and throwing an error.

While I was in there, I asked ChatGPT for a version of the script in Emacs lisp, just in case. I had it write the function for use in a Dired buffer, since that's where I'm most likely to want it. Here's the function...

```lisp
(defun add-id-to-org-files-in-dired ()
  "Add :ID: property inside a :PROPERTIES: block at the top of all Org files in the current Dired buffer."
  (interactive)
  ;;(require 'uuidgen) ;; Ensure `uuidgen` is available
  (dired-map-dired-file-lines
   (lambda (file)
	 (when (and (string-suffix-p ".org" file t) (file-exists-p file))
	   (with-temp-buffer
		 (insert-file-contents file)
		 ;; Check the first 5 lines for an existing :ID: property
		 (unless (save-excursion
				   (goto-char (point-min))
				   (search-forward ":ID:" (line-end-position 5) t))
		   ;; Insert the :PROPERTIES: block at the top of the file
		   (goto-char (point-min))
		   (insert ":PROPERTIES:\n:ID: " (org-id-uuid) "\n:END:\n\n")
		   (write-region (point-min) (point-max) file))
		 (message "Added :ID: to %s" file))))))
```    

Done and done. There may be better, cleaner ways to do this, but my problem is solved, which is all I wanted.
