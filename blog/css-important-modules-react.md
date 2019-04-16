---
date: 2019-04-16
title: CSS !important und React
spoiler: Was kann man in React machen, wenn eine CSS Library !important verwendet?
tags: ["CSS", "React"]
---
Es gibt viele Frameworks, die ungeachtet aller Warnungen !important verwenden. Semantic UI oder auch bootstrap! Wie kann man am besten CSS welches mit !important dekoriert ist, überschreiben?

Eine Möglichkeit in React ist die Verwendung von inline Styles. Seit React 15 wird aber !important von React nicht mehr erlaubt bei den CSS Eigenschaften. Schade.

Es gibt die Möglichkeit, die Eigenschaft direkt mit JavaScript zu setzen:

```javascript
const color = '#467db0';

return (
  <div
    className="bg-dark"
    ref={(el) => {
      if (el) {
        el.style.setProperty('background-color', color, 'important');
      }
    }}
  />
);
```
Mehr dazu [hier](https://joshtronic.com/2018/03/22/how-to-important-inline-styles-in-react/)
Aber seien wir mal ehrlich, das kann es nicht sein.

Meine Lösung: Ich gebe der Komponente eine Klasse die dem Namen der Komponente entspricht. In einem normalen CSS Files kann ich dann die CSS Eigenschaften ändern, so dass nur CSS in dieser Komponente betroffen ist.

Komponente:

```javascript
...
 return (
    <div className="BasicView">
...
```

overwrites.css:

```css
.BasicView .ui.basic.buttons .button:hover {
  background: rgb(211, 211, 211)!important;
  color: rgba(0,0,0,.8)!important;
  -webkit-box-shadow: 0;
  box-shadow: 0;
}

.BasicView .ui.basic.buttons .button:focus {
  background: rgb(159, 232, 250)!important;
  color: rgba(0,0,0,.8)!important;
  -webkit-box-shadow: 0;
  box-shadow: 0;
}
```

Auf diese Art und Weise behält man die Uebersicht was im externen globlen CSS geändert wird und vor allem kann man so Aenderungen einfach auf einzelne Komponente beschränken.



