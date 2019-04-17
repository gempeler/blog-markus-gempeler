---
date: 2019-04-17
title: React Configuration Objects
spoiler: Konfigurations-Daten hält man am besten in separaten Objekten
tags: ["JavaScript", "React"]
category: Best practice
---

Im folgenden Code hat es zweit ternary Ausdrücke die sich ähnlich sind. 

```javascript
import React from 'react'

const test = () => {

  const jahreszeit = 'winter'
  const text = jahreszeit === 'winter' ? 'es ist Winter' : 'es ist Sommer'
  const iconName = jahreszeit === 'winter' ? 'winterIcon' : 'sommerIcon'

  return (
    <h1>{text}</h1> 
    <i>{iconName}</i>
  )
}

export default test
```

Das kann man mit Hilfe eines Konfigurations-Objekts besser schreiben:

```javascript
import React from 'react'

const config = {
  winter: {
    text: 'es ist Winter',
    iconName: 'winterIcon'
  },
  sommer: {
    text: 'es ist Sommer',
    iconName: 'sommerIcon'
  }
}

const test = () => {

  const jahreszeit = 'winter'

  const { text, iconName} = config[jahreszeit]; 

  return (
    <h1>{text}</h1> 
    <i>{iconName}</i>
  )
}

export default test
```

Die Auslagerung in das Objekt `config` ermöglicht es auch, weitere Optionen leicht einzufügen - zum Beispiel weitere Jahreszeiten - ohne am Code in `test` etwas zu ändern. 
Und man hat so auch die Möglichkeit, die Konfiguration in eine andere Datei auszulagern!