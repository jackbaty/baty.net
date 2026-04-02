---
title: Renaming an item in DEVONthink to match the name of its parent group
date: 2023-06-12T00:00:00.000Z
tags:
  - Workflow
  - DEVONthink
  - AI
slug: rename-devonthink-item-to-parent-name
---

When creating a new project folder (group) in [DEVONthink](https://devontechnologies.com/apps/devonthink), I often make use of Templates. Templates are just files in a folder somewhere that get copied into the DEVONthink database. For example, I have a project "starter" [Tinderbox](https://eastgate.com/Tinderbox) document named "Basic Project Template.tbx". When inserting the template file into my DEVONthink project, it uses the same name as the original, which isn't helpful. DEVONthink is very scriptable, so I wrote an AppleScript to rename the selected document the same as the enclosing group/folder.

Well, I didn't exactly _write_ it. It's more like I _conjured_ it.

I first tried copying an existing script that seemed like it would give me a head start and set to modifying that. I didn't know how to refer to the enclosing group in AppleScript so I started to browse DEVONthink's dictionary. It occurred to me that maybe I could just ask ChatGPT for help, so I typed: 

> "Write me an applescript to rename an item in DEVONthink to the name of its enclosing folder"

ChatGPT wrote the following:

```applescript
tell application "DEVONthink 3"
    -- Get the currently selected item
    set selectedItem to content record of viewer window 1
    
    -- Get the enclosing group (folder) of the selected item
    set enclosingGroup to parent 1 of selectedItem
    
    -- Get the name of the enclosing group
    set enclosingGroupName to name of enclosingGroup
    
    -- Get the name of the selected item
    set selectedItemName to name of selectedItem
    
    -- Generate the new name by combining the enclosing group name and the selected item name
    set newName to enclosingGroupName & " - " & selectedItemName
    
    -- Rename the selected item with the new name
    set name of selectedItem to newName
end tell
```

It worked great on the first try. The only change I made was to remove the "selectedItemName" from the final name. What a world.
