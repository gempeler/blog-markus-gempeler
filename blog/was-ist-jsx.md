---
title: "Was ist JSX?"
spoiler: "Was ist eigentlich genau JSX und wie funktioniert es?"
date: 2019-04-09
tags: ["JavaScript", "JSX", "React"]
---

JSX ist eine **Erweiterung** von JavaScript. Es wird ein **Präprozessor** benötigt, um JSX in JS zu wandeln. In der Regel wird dafür **[Babel](https://babeljs.io/)** verwendet.

```javascript
const App = () => {
  return (
    <div>
      <div>Meine Liste</div>
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
      </ul>
    </div>
    )
}
```

wir zu folgendem JS Code:

```javascript
var App = function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("div", null, "Meine Liste"),
    React.createElement(
      "ul",
      null,
      React.createElement("li", null, "A"),
      React.createElement("li", null, "B"),
      React.createElement("li", null, "C")
    )
  );
};
```

Es ist also auch möglich, React Code ohne JSX zu schreiben - allerdings wird das nicht sehr übersichtlich werden.

Jeder JSX Befehl wird in einen Aufruf von React.createElement übersetzt. Ein React Element ist ein JS Objekt im Speicher. React übernimmt es, das DOM zu erstellen und wenn notwendig auch zu ändern. Dies geschieht mit der Methode ReactDOM.render

```javascript
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

Der grosse Vorteil ist die Geschwindigkeit, da React dafür Sorge trägt, dass nur die Teile des DOM geändert werden welche sich effektiv auch geändert haben!


