---
path: /Gatsby-und-Google-Fonts/
date: 2019-03-26T15:03:59.310Z
title: Gatsby und Google Fonts
subtitle: Google Fonts in Gatsby einbinden und nutzen
---
Es gibt verschiedene Möglichkeiten Google Fonts in Gatsby zu nutzen.
### 1. gatsby-plugin-web-font-loader
Mit [diesem](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/) Plugin. 
#### Installation:
```javascript
yarn add gatsby-plugin-web-font-loader
```
#### Nutzung
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
