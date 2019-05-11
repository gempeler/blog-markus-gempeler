---
title: "Was ist ein thunk?"
spoiler: "Was ist ein thunk und wie funktioniert es?"
date: 2019-05-11
tags: ["JavaScript", "React", "Redux"]
category: info
---

Ein "thunk" ist eine Funktion welche einen Ausdruck umhüllt um diesen Ausdruck später auszuführen.

```javascript
// Die Berechnung von 1+2 geschieht sofort
// x === 3
let x = 1 + 2

// Die Berechnung von 1 + 2 ist verzögert
// myThunk kann zu einem späteren Zeitpunkt aufgerufen werden um die Berechnung zu machen
// myThunk ist ein thunk!
let myThunk = () => 1 + 2
```

In der React Welt ist dies vor allem bei dem Modul redux-thunk ein Thema. Dort wird ein thunk dazu genutzt, damit ein Action Creator in Redux auch asynchron sein kann - zum Beispiel wenn Daten aus einer API gelesen werden müssen.

Siehe dazu auch diesen [Link](https://github.com/reduxjs/redux-thunk)
