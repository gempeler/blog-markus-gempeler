---
title: "Spread - Destructuring - Rest"
spoiler: "Eine Erklärung mit Beispielen"
date: 2020-01-22
tags: ["JavaScript"]
category: info
---

Der **Spread Operator extrahiert** Elemente aus einem _iterierbaren Element_ (also einem Array, String oder Objekt).

```javascript
const name = "MARKUS"
const characters = [...name]
// [ 'M', 'A', 'R', 'K', 'U', 'S']
```

Meist wird der Spread Operator genutzt um ein Objekt oder Array zu kopieren. Zum Beispiel so:

```javascript
const person = { vorname: "Markus", name: "Gempeler" }
const kopie = { ...person }
```

So können auch 2 Objekte kopiert werden

```javascript
const person = { vorname: "Markus", name: "Gempeler" }
const wohnort = { ort: "Luzern" }
const kopie = { ...person, ...wohnort, plz: 6006 }
// {vorname: "Markus", name: "Gempeler",ort: "Luzern", plz:6006}
```

Oft wird der Spread Operator auch in einem Funktionsaufruf benutzt, die einzelnen Elemente werden dann zu Funktionsparametern:

```javascript
const items = ["This", "is", "a", "sentence"]
console.log(...items)
// This is a sentence
```

Mit **Destructuring** nimmt man einzelne items aus einem Objekt oder Array heraus und weist diese Elemente neuen Variable zu. Hier ein Beispiel mit einem Array:

```javascript
const items = ["This", "is", "a", "sentence"]
const [a, b, c, d] = items
console, log(a, b, c, d)
// This, is, a, sentence
```

Und mit einem Objekt:

```javascript
const details = { firstName: "Code", lastName: "Burst", age: 22 }
const { firstName, age } = details
console.log(firstName, age)
// Code 22
```

Und schliesslich noch der **Rest Operator** . Er hat die gleiche Syntax wie der Spread Operator, steht aber immer auf der linken Seite des Gleichheitszeichens und seine Funktion ist genau das Gegenteil des Spread Operators. Dieser extrahiert ja Elemente - der Rest Operator sammelt hingegen Elemente und steckt sie in ein Array oder ein Objekt. Hier ein Beispiel:

```javascript
const numbers = [1, 2, 3]
const [firstNumber, ...restOfTheNumbers] = numbers
console.log(firstNumber, restOfTheNumbers)
// 1, [ 2, 3 ]
```

Und so verhält sich der Rest Operator mit Objekten:

```javascript
const details = {
  firstName: "Code",
  lastName: "Burst",
  age: 22,
}
const { age, ...restOfTheDetails } = details
console.log(age, restOfTheDetails)
// 22 { firstName: 'Code', lastName: 'Burst' }
```

Der Rest Operator muss immer am Ende stehen !

Siehe dazu auch diesen [Link](https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831)
