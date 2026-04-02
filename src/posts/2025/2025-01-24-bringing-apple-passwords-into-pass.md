---
title: Bringing Apple Passwords into Pass
date: 2025-01-24T21:11:08.000Z
slug: bringing-apple-passwords-into-pass
categories:
  - Software
---

I have a soft spot for [Pass: The Standard Unix Password Manager](https://www.passwordstore.org/), but Apple's new Passwords app has been working fine. I use Safari, so the whole thing is very convenient. 

Sometimes I get twitchy about having things in only one place, so today I decided I'd like to import my Apple Password passwords into Pass. It took me a minute, so I'm jotting down some notes here, for next time.

First, install [pass-import](https://github.com/roddhjav/pass-import). Pass-import is "A pass extension for importing data from most existing password managers". There's a lot of Python going on, which always seems to trip me up, but thankfully there's a Homebrew recipe, so...`brew install pass-import`.

pass-import supports many password apps out of the box. It doesn't yet support Apple Passwords, apparently. It handles Keychain exports, but that's not what I needed. I used the generic CSV option.

I exported the passwords to a CSV file (pass.csv) from Passwords.app. 

I ran a test `pass import foo.csv` command but got an error. The `pass` command didn't recognize the import option. After some digging, I learned that the Homebrew recipe installs a script named `pimport`. Confusing, but OK fine.

After much trial and error, this is finally the command that worked.

```sh
pimport  -o .password-store/ \   # where to import to
             pass \                  # destination format
             csv \                   # Source format
             pass.csv \              # Source csv file
             --cols=title,url,login,password,comments,otpauth \  # Map columns
             -p apple-import/        # put in subfolder .password-store/apple-import
```

Now I have a backup. I don't know of a way to do this incrementally, so I suppose I'll just delete the `apple-import/` folder and redo the export/import once in a while to catch up.
