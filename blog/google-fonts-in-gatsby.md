---
path: /Google Fonts in Gatsby/
date: 2019-04-02T09:02:38.199Z
title: Google Fonts in Gatsby
subtitle: Google Fonts in Gatsby
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
