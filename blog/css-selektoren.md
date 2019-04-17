---
date: 2019-04-15
title: CSS Selektoren und Kombinatoren
spoiler: ... oder was ist eigentlich der Unterschied zwischen .a .b und .a.b
tags: ["CSS", "Selektoren", "Kombinatoren"]
category: info
---
Vergeblich sucht man in den CSS Spezifikationen nach einer Kombination der Art `.class1.class2`. Dies hat einen einfachen Grund: es ist keine **CSS Kombination**!

Stehen zwei Klassen ohne Leerzeichen direkt hintereinnander, so handelt es sich dabei um einen **CSS Selektor**. Es werden nur Elemente ausgewählt, die beide Klassen haben (Und-Selektor). Sobald jedoch ein Leerzeichen dazwischen steht, ist dieses der Nachfahren-**Kombinator**.

Durch diese CSS Anweisung 
```css
.BasicView .ui.basic.buttons > .button:hover {...}
```
werden alle Elemente mit der Klasse `button`, welche das **erste** Kind von Elementen mit den Klassen `ui basic buttons` welche ihrerseits Kinder von Elementen mit der Klasse `BasicView` sind, ausgewählt.

Und weil man das sprachlich nicht verstehen kann - so sieht das aus :

```javascript
<element class="BasicView">
  …
    <element class="ui basic buttons"> 
      <element class="button" :hover>
```
Die Regel gilt also für das **dritte Element** `<element class="button" :hover>`
