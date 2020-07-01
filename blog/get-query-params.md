---
date: 2020-07-01
title: URL Parameter lesen
spoiler: Eine Funktion zum Lesen von URL Parameter
tags: ["JavaScript", "React"]
category: howto
---

```javascript
function getQueryVariable(variable) {
  var query = window.location.search.substring(1)
  var vars = query.split("&")
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=")
    if (pair[0] === variable) {
      return pair[1]
    }
  }
  return false
}
```

Das kann man dann so verwenden:

```javascript
useEffect(() => {
  const id = getQueryVariable("id")
  if (id) {
  }
}, [])
```
