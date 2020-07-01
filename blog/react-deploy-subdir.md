---
date: 2019-05-16
title: Create-react-app in Unterverzeichnis
spoiler: Wie kann man mit create-react-app in ein Unterverzeichnis veröffentlichen?
tags: ["JS", "React", "react-router", "create-react-app"]
category: howto
---

Per default geht create-react-app davon aus, dass der Build in dem Root Verzeichnis auf dem Server sein wird. Will man in eine Unterverzeichnis veröffentlichen, so muss man dies in package.json angeben:

```javascript
"homepage": "http://www.meinserver.ch/subdir",
```

Die bessere Variaten ist, in einem .env File die PUBLIC_URL Variable zu definieren:

```javascript
PUBLIC_URL=http://www.meinserver.ch/subdir
```

Wenn man react-router benutzt, dann sollte man noch das Attribut basename angeben:

```javascript
<Router basename={process.env.PUBLIC_URL}>
```

Tut man dies nicht, so kann man alternativ dazu in jedem Route die PUBLIC_URL angeben, das ist aber die schlechtere Variante ;-)

[Siehe auch](https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1)
