---
date: 2019-04-18T08:00:00
title: This in JavaScript
spoiler: "This - ein ewiger Quell von Unsicherheit" 
tags: ["JavaScript"]
category: info
---

Wohl jeder Javascript Entwickler ist schon mehr als ein Mal mit den Tücken von this in Berührung gekommen. Hier also der Versuch einer Annäherung.

This bezieht sich in Javascript auf den **Kontext** in dem man ist. 

Also:

```javascript
a = 3;
(function() {
  let b = 10;
  console.log(this.a);
  console.log(this.b);
})();
```

ergibt

```bash
3
undefined
```

Die Variable b ist innerhalb der Funktion definiert und auch nur dort sichtbar. Da der Kontext der Funktion (von dort wo sie aufgerufen wird) das Window Objekt ist (im Browser), ist die Variable b dort nicht bekannt. Anders die Variable a - diese wurde direkt als Eigenschaft des Window Objektes definiert.

In einer Klasse zeigt this auf die Instanz dieser Klasse:

```javascript
class Milch {
  constructor(art) {
    this.art = !!art
  }
  info() {
    console.log(`Diese Milch ist ${this.art ? 'eine UHT ' : 'eine normale '}Milch`)
  }
}
const UHTMilch = new Milch(true)
const normaleMilch = new Milch(false)
UHTMilch.info() // Diese Milch ist eine UHT Milch
normaleMilch.info() // Diese Milch ist eine normale Milch
```

So weit so gut. Probleme treten auf, wenn wir mit Callback Funktionen arbeiten:

```javascript
imWindow = "Yeah";
function myFunc(callback) {
  let a = 1;
  console.log(a);
  callback();
}

// Die Callback Funktion
const cb = function() {
  console.log(this.a);
  console.log(this.imWindow)
}

myFunc(cb);
```

Die Ausgabe ist:
```bash
1
undefined
Yeah
```

Der Ausführungskontext des Callbacks ist also **nicht** die Funktion `myFunc`, sondern das Window Objekt! Callbacks werden im globalen Kontext ausgeführt. 
