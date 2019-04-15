---
date: 2019-04-02
title: Google Fonts in Gatsby
spoiler: Google Fonts in Gatsby
tags: ["Google Fonts", "Gatsby"]
---
Es gibt verschiedene Möglichkeiten Google Fonts in Gatsby zu nutzen.

### 1. gatsby-plugin-web-font-loader

Mit [diesem](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/) Plugin. 

#### Installation:

```javascript
yarn add gatsby-plugin-web-font-loader
```

#### Nutzung

Im gatsby-config.js file:

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Droid Sans', 'Droid Serif']
        }
      }
    }
  ]
}
```
