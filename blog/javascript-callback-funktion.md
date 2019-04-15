---
title: 'JavaScript Callback Funktionen'
date: 2019-04-05
spoiler: 'Das Prinzip einer Callback Funktion in JavaScript'
tags: ["JavaScript", "Callback"]
---

Eine Callback Funktion (cb) wird von einer anderen Funktion aufgerufen - deshalb Callback. Die cb wird als Argument einer anderen Funktion übergeben. Meist definiert man die Callback Funktion mittels einer Arrow Funktion direkt in der Parameterliste.

```javascript
// der Parameter cb ist die Callback Funktion
function tuWas( cb) {
  let resultat = 42;
  // Aufruf der Callback Funktion mit einem Argument
  cb(resultat)
}

tuWas( (value) => {
    console.log(value)
})

```

`tuWas` hat als Argument eine Funktion, die als Funktionsausdruck definiert wird.
Funktionsausdrücke sind praktisch, um Funktionen als ein Argument einer anderen Funktion zu übergeben.
`value` wird innerhalb von `tuWas` berechnet und ist dann das Funktionsargument bei 
Aufruf der Callback Funktion innerhalb von `tuWas`. 

Man muss also wissen, wieviele und welche Parameter eine Callback Funktion hat. Diese Parameter können auch selber Funktionen sein, wie zum Beispiel bei einer Promise `reject` und `resolve`. Zu beachten ist: die Parameter werden von der Funktion, welche die cb aufruft, definiert und mit Werten gefüllt. 