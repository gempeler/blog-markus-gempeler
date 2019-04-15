---
title: 'Promises Chaining in Javascript'
date: 2019-04-05
spoiler: 'Die Handler einer Promise in JavaScript können aneinnander gereiht werden (Chaining).'
tags: ["JavaScript", "Promises", "Chaining"]
---

Die *.then(handler)* Methode einer Promise gibt **immer** eine Promise zurück. Dies wird in *handler* erfüllt indem entweder ein Wert, ein Error oder wiederum eine Promise zurückgegeben wird. 


<figure>
  <img src="https://javascript.info/article/promise-chaining/promise-handler-variants@2x.png" alt="my alt text"/>
  <figcaption>Promise Chain (Quelle: https://javascript.info/promise-chaining)</figcaption>
</figure>

Eine simple Promise funktioniert wie folgt:

```javascript
const p = new Promise( (resolve, reject) => {
  
  let error = false;
  
  if (error !== true) {
    resolve("resolved")
  } else {
    reject("rejected")
  }
  
  
})

p.then( value => {
  console.log(value);
})

```

Resolve oder reject geben einen Wert zurück, dieser wird dann als value Parameter im .then Handler verwendet. 
Man kann auch mehrer .then in eine Kette machen:

```javascript
...
p.then( value => {
  console.log(value);
  return value
})
.then ( value => {
  console.log(value)
})
```

Die Ausgabe ist dann zwei Mal "resolved".

```bash
"resolved"
"resolved"
```

Nun kann man aber anstatt eines normalen Wertes auch eine Promise zurückgeben! Macht man dies, so wir die Ausführung des zweiten .then erst gemacht, wenn diese Promise erfüllt ist. 

```javascript
...
p.then( value => {
  console.log(value);
  return new Promise ( (resolve, reject) => {
    window.setTimeout( () => {
      resolve("1 Sekunde vorbei!")
    }, 1000)
  })
})
.then ( value => {
  console.log(value)
})
```

Die Ausgabe ist nun 
```bash
"resolved"
"1 Sekunde vorbei!" // nach einer Sekunde
```

Damit können also asynchrone Aufgaben 'gechaint' werden, das heisst der Reihe nach ausgeführt.

Es kann auch ein Error ausgelöst werfen, falls etwas schief geht:

```javascript
...
p.then( value => {
  console.log(value);
  return new Promise ( (resolve, reject) => {
    window.setTimeout( () => {
      let error = true;
      if (error) reject( "Fehler" );
      resolve("1 Sekunde vorbei!")
    }, 1000)
  })
})
.then ( value => {
  //console.log(value)
})
.catch ( error => {
  console.log(error)
})
```

Das ergibt in der Konsole diese Ausgabe:
```bash
"resolved"
"Fehler" // nach einer Sekunde
```