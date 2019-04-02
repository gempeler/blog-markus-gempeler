---
path: /Klassen in Markdown festlegen/
date: 2019-04-02T09:20:13.251Z
title: Klassen in Markdown festlegen
subtitle: Klassen in Markdown festlegen
---
Markdown hat direkt keine Möglichkeit HTML CSS Klassen für Elemente festzulegen. Oft ist man aber in der Situation, dass man einzelne Elemente im Markdown File mit einer CSS Klasse verbinden möchte.

### HTML block in Markdown

Ein HTML block ist ein Gruppe von Zeilen die als HTML Code behandelt werden. Sie werden nicht in HTML Output gewandelt! Damit ist es möglich, CSS Klassen für Markdown Elemente zu definieren. Es gibt verschiedene Arten einen solchen HTML Block in Markdown zu definieren, eine Uebersicht gibt es [hier](https://spec.commonmark.org/0.28/#html-blocks).

#### Beispiel

```javascript
<div class="custom-class">
 
*Markdown*
 
</div>
```

wird zu:

```html
<div class="custom-class">
<p><em>Markdown</em></p>
</div>
```

