---
title: "Was ist eine React Komponente?"
spoiler: "Was ist eine React Komponente?"
date: 2019-04-09
tags: ["JavaScript", "JSX", "React", "Component"]
---

Eine React Komponente ist eine JavaScript Funktion welche ein React Element zurück gibt und einen Parameter (props) haben kann. 

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Der Name der Komponente **muss gross geschrieben** sein!

Wenn React ein JSX Element findet, welches eine Komponente repräsentiert, dann reicht es die JSX Attribute an diese Komponente in einem einzigen Objekt als Argument weiter. Man nennt dieses Objekt "props".

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```