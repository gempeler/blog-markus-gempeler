---
date: 2019-04-05
title: Promises
spoiler: Promises in Javascript - ein kleiner Überblick.
tags: ["JavaScript", "Promises"]
category: info
---
Eine Promise ist ein Ersatz für eine Callback Funktion.

Die Promise ist ein Objekt, welches mit new Promise erstellt wird. Argument ist eine Callback-Funktion mit 2 Argumenten : resolve und reject, welche ihrerseits auch Funktionen sind.

```javascript
function getData() {
  return(
    new Promise(function(resolve, reject) {
      const error = false;
      if (!error) {
        resolve("Alles ok");
      } else {
        reject("Es gab einen Fehler");
      }
    })
  )
}
```
Wenn eine Promise erstellt wird, ist ihr Status *pending*. Die folgenden Methoden dienen dazu, Handler zu definieren welche aufgerufen werden, wenn der Status der Promise auf *rejected* oder *fullfilled* wechselt. 

```javascript
Promise.prototype.catch(onRejected)
Promise.prototype.then(onFulfilled, onRejected)
Promise.prototype.finally(onFinally)
```

```javascript
getData()
  .then(function (resultat) {
    console.log(resultat)
  })
  .catch(function (resultat) {
    console.log(resultat)
  })
```

*Catch, then und finally* geben alle eine Promise zurück. Sie sind deshalb chainable !


