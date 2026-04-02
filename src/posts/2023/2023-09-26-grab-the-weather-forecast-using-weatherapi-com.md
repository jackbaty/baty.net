---
title: Grab the weather forecast using weatherapi.com
date: 2023-09-26T15:10:04.000Z
slug: grab-the-weather-forecast-using-weatherapi-com
categories:
  - Tech
tags:
  - ''
summary: null
draft: false
---

I like to record the weather in my journals. For several years, I’ve used https://wttr.in via curl. Recently, wttr is often unreachable or throws errors, so I took a look at [weatherapi.com](https://www.weatherapi.com/)

> Designed for developers by developers, Weather API is the ultimate weather and geolocation API

The free account limits are generous, so I created an account. The default JSON results are very thorough. I created a little shell script that uses `jq` to parse the JSON and returns only the high/low temps and a text summary of the forecast:

```sh
#!/bin/sh
# Jack Baty, 2023 (https://baty.net)
    
jq=/opt/homebrew/bin/jq
weatherfile=`mktemp`
    
curl -s "https://api.weatherapi.com/v1/forecast.json?key=MYAPIKEY&q=MYZIPCODE&days=1&aqi=no&alerts=no" > $weatherfile

condition=`${jq} -r .forecast.forecastday[0].day.condition.text ${weatherfile}`
high=`${jq} -r .forecast.forecastday[0].day.maxtemp_f ${weatherfile}`
low=`${jq} -r .forecast.forecastday[0].day.mintemp_f ${weatherfile}`

echo "Low ${low}, High ${high} - ${condition}"
```

The output looks like this:

> Low 52.1, High 72.6 – Patchy rain possible

Easy enough. I wrote a small lisp function that calls the script and inserts the weather in Emacs:

```emacs-lisp
(defun jab/insert-forecast ()
"Use weatherapi.com to insert the weather forecast at point"
	(interactive)
	(let ((w (shell-command-to-string "~/bin/getweather")))
    (insert w)))
```
