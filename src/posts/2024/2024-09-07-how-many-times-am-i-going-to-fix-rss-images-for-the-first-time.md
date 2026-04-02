---
title: How many times am I going to fix RSS images for the first time?
date: 2024-09-07T19:59:36.000Z
slug: how-many-times-am-i-going-to-fix-rss-images-for-the-first-time
categories:
  - Blogging
tags:
  - Hugo
  - RSS
summary: null
cover:
  image: null
  hidden: false
  caption: null
---

OMG I never learn. Even when I write stuff down.

Every time I switch back to Hugo, I complain about the fact that when using relative image links in Hugo's Page Bundles, they don't work in the RSS feed. Then I spend time digging around old forum posts or whatever trying to fix the problem.

Except I already have fixed the problem. At least twice. Maybe just check [your own notes](/posts/2023/10/images-in-hugo-rss-feeds/), Jack.

I like the PaperMod theme's built-in figure shortcode, so this time I made a local copy of that and tweaked it.

I copied the theme's shortcode to ./layouts/shortcodes/figure.html and added two lines to the top of the file:

```
{{ $imgname := .Get "src" }}
{{ $img := $.Page.Resources.GetMatch $imgname }}
```

I don't understand Hugo's templating language at all, but I think what this does is look for a file in the page bundle that matches the figure shortcode's `src` attribute. The problem is that if there isn't one, the site won't build, so I added a quick and dirty conditional to my copy of the shortcode template:

```
<img loading="lazy" src="{{- if $img }}{{ $img.Permalink }}{{ else }}{{ .Get "src" }}{{ end -}}...
```

If you see the following adorable photo of my grandson in your RSS reader[^1], and didn't before, it worked.

<figure><img src="/img/2024/lincoln.jpg" alt=""></figure>

Here's my tweaked copy of the figure shortcode from [PaperMod](https://github.com/adityatelange/hugo-PaperMod/):

```
{{ $imgname := .Get "src" }}
{{ $img := $.Page.Resources.GetMatch $imgname }}
<figure{{ if or (.Get "class") (eq (.Get "align") "center") }} class="
           {{- if eq (.Get "align") "center" }}align-center {{ end }}
           {{- with .Get "class" }}{{ . }}{{- end }}"
{{- end -}}>
    {{- if .Get "link" -}}
        <a href="{{ .Get "link" }}"{{ with .Get "target" }} target="{{ . }}"{{ end }}{{ with .Get "rel" }} rel="{{ . }}"{{ end }}>
    {{- end }}
    <img loading="lazy" src="{{- if $img }}{{ $img.Permalink }}{{ else }}{{ .Get "src" }}{{ end -}}{{- if eq (.Get "align") "center" }}#center{{- end }}"
         {{- if or (.Get "alt") (.Get "caption") }}
         alt="{{ with .Get "alt" }}{{ . }}{{ else }}{{ .Get "caption" | markdownify| plainify }}{{ end }}"
         {{- end -}}
         {{- with .Get "width" }} width="{{ . }}"{{ end -}}
         {{- with .Get "height" }} height="{{ . }}"{{ end -}}
    /> <!-- Closing img tag -->
    {{- if .Get "link" }}</a>{{ end -}}
    {{- if or (or (.Get "title") (.Get "caption")) (.Get "attr") -}}
        <figcaption>
            {{ with (.Get "title") -}}
                {{ . }}
            {{- end -}}
            {{- if or (.Get "caption") (.Get "attr") -}}<p>
                {{- .Get "caption" | markdownify -}}
                {{- with .Get "attrlink" }}
                    <a href="{{ . }}">
                {{- end -}}
                {{- .Get "attr" | markdownify -}}
                {{- if .Get "attrlink" }}</a>{{ end }}</p>
            {{- end }}
        </figcaption>
    {{- end }}
</figure>
```

If there's a better way to do this, please let me know.

[^1]: Many RSS readers automatically expand the URL themselves, so it may have always appeared to work for you.
