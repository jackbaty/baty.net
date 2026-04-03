;;; init-baty-net.el --- Helpers for baty.net (Eleventy) content creation

(setq baty-net-directory "~/sites/baty.net")

(defun jab/baty-slugify (title)
  "Convert TITLE to a URL slug matching new-content.sh's slugify function."
  (replace-regexp-in-string
   "^-+\\|-+$" ""
   (replace-regexp-in-string
    "[^a-z0-9]+" "-"
    (downcase title))))

(defun jab/new-baty-post ()
  "Create a new post on baty.net and open it."
  (interactive)
  (let* ((site-dir (expand-file-name baty-net-directory))
         (script (expand-file-name "new-content.sh" site-dir))
         (title (read-string "Post title: "))
         (slug (jab/baty-slugify title))
         (today (format-time-string "%Y-%m-%d"))
         (year (format-time-string "%Y"))
         (file (expand-file-name
                (concat "src/posts/" year "/" today "-" slug ".md")
                site-dir)))
    (if (string-empty-p title)
        (user-error "Post title is required")
      (let ((default-directory site-dir))
        (call-process script nil nil nil "post" "--no-open"
                      (concat "--title=" title)))
      (find-file file))))

(defun jab/new-baty-journal ()
  "Open today's journal entry on baty.net, creating it if necessary."
  (interactive)
  (let* ((site-dir (expand-file-name baty-net-directory))
         (script (expand-file-name "new-content.sh" site-dir))
         (today (format-time-string "%Y-%m-%d"))
         (year (format-time-string "%Y"))
         (slug (format-time-string "%d%b%y"))
         (file (expand-file-name
                (concat "src/journal/" year "/" today "-" slug ".md")
                site-dir)))
    (unless (file-exists-p file)
      (let ((default-directory site-dir))
        (call-process script nil nil nil "journal" "--no-open")))
    (find-file file)))

(defun jab/new-baty-note ()
  "Create a new note on baty.net and open it."
  (interactive)
  (let* ((site-dir (expand-file-name baty-net-directory))
         (script (expand-file-name "new-content.sh" site-dir))
         (title (read-string "Note title (optional): "))
         (today (format-time-string "%Y-%m-%d"))
         (year (format-time-string "%Y"))
         (slug (if (string-empty-p title)
                   (format-time-string "%Y%m%d%H%M%S")
                 (jab/baty-slugify title)))
         (file (expand-file-name
                (concat "src/notes/" year "/" today "-" slug ".md")
                site-dir)))
    (let ((default-directory site-dir))
      (if (string-empty-p title)
          (call-process script nil nil nil "note" "--no-open")
        (call-process script nil nil nil "note" "--no-open"
                      (concat "--title=" title))))
    (find-file file)))

(provide 'init-baty-net)
;;; init-baty-net.el ends here
