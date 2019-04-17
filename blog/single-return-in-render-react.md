---
date: 2019-04-17
title: 'React: Nur ein return in render()'
spoiler: Mehrere return Befehlte in einer React render() Methode sind problematisch. Hier wird gezeigt wieso das so ist!
tags: ["React"]
category: best
--- 

Häufig will man in der `render()` Methode in Abhänigkeit einer oder mehrerer Bedingungen auch verschiedene JSX zurückgeben. Wenn man dies aber mit mehreren `return` Statements tut, wird die Komponente schnell unflexibel für Veränderungen.

Nehmen wir an wir haben folgende Komponente: 

```javascript
import React from 'react'

function Test(props) {

  renderContent = () =>{

    if(props.value === 1){
      return (
        <div>'Eins'</div>
      )
    }

    if(props.value === 1){
      return (
        <div>'Zwei'</div>
      )
    }

  }

  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default Test

```

Die Funktion `renderContent` gibt je nach Wert von `props.value` unterschiedlichen JSX Code zurück. Auf diese Art ist es einfach, eine Wrapper zu erstellen. Wenn man zum Beispiel einen Rand um die Komponente machen will, dann ist das ganz einfach:

```javascript
  return (
    <div>
      <div className="border red">
        {renderContent()}
      </div>
    </div>
  )
```

Hätte es mehrere `return` Befehle in der render Funktion, dann müsste man jede dieser `return` Befehle mit einem Wrapper versehen - und dies wäre natürlich eine schlechte Wahl !