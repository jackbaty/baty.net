---
title: Espanso again
date: 2025-03-17T15:53:13.000Z
slug: espanso-again
categories:
  - Tech
tags:
  - Software
cover:
  image: null
  alt: null
  caption: null
---

I've gone back to using [Espanso](https://espanso.org) for text expansion. As powerful as Keyboard Maestro is, every time I reach for it I feel like I've already lost a battle somewhere. Text expansion macros are about all I use KM for these days, so it's not much of a disruption.

I bookmark Espanso's config folder in Emacs so I can jump right in any time. The expansion macros ("matches") are contained in YAML files and  can be as simple as:

```yaml
 - trigger: "j@"
    replace: "jack@baty.net
```

They can get pretty fancy. I don't take full advantage of all the gizmos, but I use a ton of stuff like this:

```yaml
- trigger: ":hugo"
    label: "Baty.net Hugo Post"
    vars:
      - name: mydate
        type: date
        params:
          format: "%Y-%m-%d"
      - name: mytime
        type: date
        params:
          format: "%H:%M:%S%:z"
    replace: |
             ---
             title: $|$
             date: {{mydate}}T{{mytime}}
             tags: [""]
             slug: 
             summary:
             draft: true
             ---
```

Espanso is developed by [Federico Terzi](https://federicoterzi.com) and is free and open-source.
