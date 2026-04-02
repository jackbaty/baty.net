---
title: Changing Emacs keybindings is not trivial
date: 2023-07-22T10:11:01.000Z
slug: changing-emacs-keybindings-is-not-trivial
tags:
  - Emacs
summary: 'Technically, it''s easy. Actually doing it is a nightmare.'
---

Irreal: reacting to someone questioning Emacs keybindings:

> The question is an honest one. He doesn’t like the current bindings and wants something he feels would be more coherent. But here’s the thing: the question doesn’t make any sense.
> 
> I can make any changes I want; you can make any changes you want; and OutOfCharm can make any changes he wants. If you don’t like a particular (or every) binding, it’s trivial to change it.
> 
> <cite>Irreal, [Red Meat Friday: Better Emacs Keybindings](https://irreal.org/blog/?p=11509)</cite>

This is a common response in discussions around keybindings. "Just change them to whatever you want!" They often follow that up with "I use the vanilla bindings" which doesn't help their argument.

First, while the actual technical requirement for changing bindings is indeed trivial, choosing which method to use and where to use it is not. A newcomer reading the docs and various blog posts about changing bindings will come away exhausted and more confused than before. It takes _effort_ to figure that out. It's _after_ all that that it becomes trivial. Or it would be, but now that I've figured out how to do it, you're asking me to decide what every damn binding should be. It's not that I am forced to change all of them, but once it starts, I feel like I have to. I don't need that kind of pressure. Should I use Evil? Maybe general.el? Maybe I should make SPC my leader key?

No. I'm not doing that. I want someone with common sense, good taste, and modern sensibilities to decide on a set of keybindings for me. And no, the vanilla ones aren't it. I want it to be like when I started using Doom or Spacemacs or whatever and the bindings made sense in short order. I didn't want to spend my days thinking about what every binding should be. If one or two of them bother me, _then_ I'll change them. Otherwise, I'll just carry on living my life.

The reason I had a negative reaction to the "Just change them yourself, it's trivial!" response is that I spent a good part of last weekend revamping my vanilla config's bindings. It was not fun and it was definitely not trivial. I'd have preferred something out of the box that didn't hurt my brains and my hands.

In case you're wonderng, I ended up with Evil mode, general.el, SPC as leader, and a mishmash of self-inflicted wounds that I now have to maintain myself forever. ¯\_(ツ)_/¯. 
