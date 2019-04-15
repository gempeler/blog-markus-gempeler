---
date: 2019-04-04
title: Globale Styles in Gatsby
spoiler: Wo definiert man am besten globale CSS Styles in einer Gatsby App ?
tags: ["Gatsby", "CSS"]
---
Es gibt verschiedene Möglichkeiten globale Styles zu definieren

### 1. Mit einer Layout Komponente

Verwendet man die bekannte Layout Pattern, dann kann man dort ein CSS File importieren

```javascript
import React from "react"
import "./layout.css"

export default ({ children }) => <div>{children}</div>
```
Das kann man dann so verwenden:

```javascript
import React from "react"
import Layout from "../components/layout"

export default () => <Layout>Hello world!</Layout>
```

### 2. import in *gatsby-browser.js*
Wenn man keine Layout Komponente benutzen will, kann man globale Styles im File *gatsby-browser.js* importieren:
```javascript
// gatsby-browser.js
require("prismjs/themes/prism-tomorrow.css")
```

[Weitere Informationen](https://www.gatsbyjs.org/docs/creating-global-styles/#how-to-add-global-styles-in-gatsby-using-css-in-js) in der Gatsby Dokumentation.
