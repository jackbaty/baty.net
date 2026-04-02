---
title: Annotating an image with weather
date: 2025-03-28T17:12:10.000Z
slug: annotating-an-image-with-weather
categories:
  - ''
tags:
  - ''
cover:
  image: null
  alt: null
  caption: null
---

I thought it would be neat to include the date and weather on the images I use for my journal entry covers here on the blog.

It turned out to be neat, but not fun. I spent nearly 3 hours on all sorts of failed approaches. I figured it might be useful to write down where I ended up.

I leveraged two of my existing bash scripts that deal with the weather, and wrote a new one that uses ImageMagick to put things together.

Basically, I pass an image name to the script and it overlays the date at the bottom left and the weather at the bottom right. Like so...

`~/bin/annotate-image.sh MyImage.jpg`

Here is the result:

<figure><img src="/img/2025/example.jpg" alt=""><figcaption>The results are still janky, but they work.</figcaption></figure>

```bash
#!/bin/bash

# Check if an image name is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <image_file>"
    exit 1
fi

IMAGE_FILE="$1"
OUTPUT_FILE="cover_$(basename "$IMAGE_FILE")"
WEATHER_URL="wttr.in/Grand+Rapids_0tqp0.png"
WEATHER_ICON=$(~/bin/getwcond)
WEATHER_ICON="/Users/jbaty/Sync/graphics/weather/64x64/day/$WEATHER_ICON"
CONDITIONS=$(~/bin/getweather | cut -f2 -d"|")


# Get current date in format "Friday, March 28, 2025"
CURRENT_DATE=$(date "+%A, %B %d, %Y")

# Add the weather info to the bottom right and the date to the bottom left
/opt/homebrew/bin/magick \
    "$IMAGE_FILE" \
    -fill white \
    -undercolor '#6F737880' \
    -font "Helvetica" \
    -pointsize 40 \
    -gravity SouthWest \
    -annotate +20+20 "$CURRENT_DATE" \
    -gravity SouthEast \
    -pointsize 30 \
    -annotate +20+20 "$CONDITIONS" \
    "$OUTPUT_FILE"

# Now overlay the weather from wttr onto the output from the previous command
/opt/homebrew/bin/magick composite \
    -gravity SouthEast \
    -geometry +20+60 \
    "$WEATHER_ICON" \
    "$OUTPUT_FILE" \
    "$OUTPUT_FILE"

echo "Weather added to image: $OUTPUT_FILE"
```

That script uses two other scripts that I wrote years ago for grabbing weather conditions `getweather`

```bash
#!/bin/sh
# Grab and parse weather info using WeatherAPI.com

jq=/opt/homebrew/bin/jq
weatherfile=`mktemp`
curl -s "https://api.weatherapi.com/v1/forecast.json?key=MYAPIKEY&q=MYZIP&days=1&aqi=no&alerts=no" > $weatherfile

now=`${jq} -r .current.condition.text ${weatherfile}`
temp=`${jq} -r .current.temp_f ${weatherfile}`
condition=`${jq} -r .forecast.forecastday[0].day.condition.text ${weatherfile}`
high=`${jq} -r .forecast.forecastday[0].day.maxtemp_f ${weatherfile}`
low=`${jq} -r .forecast.forecastday[0].day.mintemp_f ${weatherfile}`

echo "${now} ${temp} | Low ${low}, High ${high}"
```

Returns something like "Light rain 50.4 | Low 27.9, High 69.1". I use `cut` to grab just the high/low temperature part.

Then there's `getwcond` which is mostly a copy/paste job from the previous script. It returns the name of an image file for the current conditions (e.g. 234.png). I use this as the icon to overlay onto the image. 

```bash
#!/bin/sh
# Jack Baty, 2023 (https://baty.net)
# Grab and parse weather info using WeatherAPI.com

jq=/opt/homebrew/bin/jq
weatherfile=`mktemp`
conditionfile=/Users/jbaty/Sync/graphics/weather/conditions.json
curl -s "https://api.weatherapi.com/v1/forecast.json?key=MYAPIKEY&q=MYZIP&days=1&aqi=no&alerts=no" > $weatherfile

code=`${jq} -r .forecast.forecastday[0].day.condition.code ${weatherfile}`
iconcond=`${jq} -r .current.condition.icon ${weatherfile}`
icon=$(${jq} '.[] | select(.code=='${code}').icon' ${conditionfile})

iconfile=$(basename $iconcond)
echo $iconfile
```

This all took me way too long. I could've pulled out the LLM crutch, but I really wanted to figure it out on my own. Next time I should just take the extra 2 minutes and use Photoshop instead :).
