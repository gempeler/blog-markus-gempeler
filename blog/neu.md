---
path: /css-klassen-in-markdown/
date: 2019-03-26T16:17:52.719Z
title: Klassen in Markdown festlegen
subtitle: Wie kann man in eine Github Markdown File Klassen angeben
---
Markdown hat direkt keine Möglichkeit HTML CSS Klassen für Elemente festzulegen. Oft ist man aber in der Situation, dass man einzelne Elemente im Markdown File mit einer CSS Klasse verbinden möchte.

### HTML block

Ein HTML block ist ein Gruppe von Zeilen die als HTML Code behandelt werden. Sie werden nicht in HTML Output gewandelt! Damit ist es möglich, CSS Klassen für Markdown Elemente zu definieren. Es gibt verschiedene Arten einen solchen HTML Block in Markdown zu definieren, eine Uebersicht gibt es [hier](https://github.github.com/gfm/#html-blocks).

#### Beispiel

```javascript
<div class="custom-class">
 
*Markdown*
 
</div>
```

wird zu:

```html
<div class="foo">
<p><em>Markdown</em></p>
</div>
```
