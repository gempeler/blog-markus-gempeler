---
path: /Gatsby-und-Google-Fonts/
date: 2019-03-26T15:03:59.310Z
title: Gatsby und Google Fonts
subtitle: Google Fonts in Gatsby einbinden und nutzen
---
## Gatsby und Google Fonts

Es gibt verschiedene Möglichkeiten Google Fonts in Gatsby zu nutzen.

### gatsby-plugin-web-font-loader

Mit [diesem](https://www.gatsbyjs.org/packages/gatsby-plugin-web-font-loader/) Plugin. 

#### Installation:

`yarn add gatsby-plugin-web-font-loader`

Nutzung

```
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
