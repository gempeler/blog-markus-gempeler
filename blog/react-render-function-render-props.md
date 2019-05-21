---
date: 2019-05-21
title: React Render Function und Render Props
spoiler: Render Funktion und Render Props. Was ist das und was ist der Unterschied
tags: ["React"]
category: info
---

In React sind die Children einer Komponente in props.children verfügbar. So kann mit Komposition einfach und gut gearbeitet werden

```javascript
const Panel = (props) =>
  <div className="Panel">
    {props.children}
  </div>

<Panel>Ich bin der Content</Panel>
```

Wie kann man aber props.children Parameter uebergeben? Indem man aus den children eine Funktion macht!

```javascript
import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

const Counter = ({ children, counter, clickHandler }) => {
  return (
    <div>
      <div>Hello from fancy counter! </div>
      <div>Current count is : {counter}</div>
      {children(clickHandler)}
    </div>
  )
}

const Button = props => {
  return (
    <div>
      <button onClick={props.clickHandler}>Increment</button>
    </div>
  )
}

function App() {
  const clickHandler = () => {
    console.log("clicked")
  }

  let counter = 1
  return (
    <div className="App">
      <Counter counter={counter} clickHandler={clickHandler}>
        {clickHandler => {
          return <Button clickHandler={clickHandler} />
        }}
      </Counter>
      {/* <Button></Button> */}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

Das Child von <Counter> ist also jetzt eine Funktion und es kann ein Parameter übergeben werden! Man braucht diese Pattern wenn das Child einer Komponente Werte welche in dieser Komponente enthalten sind nutzen will! Also im Beispiel die clickHandler Funktion, die ihrerseits als prop der <Counter> Komponente übergeben wurde.

Wenn nicht children eine Funktion sind , sondern eine andere prop, dann spricht man von render prop. Also eine prop die eine Funktion ist! Ganz einfach ;-)

[Siehe auch](https://frontarm.com/james-k-nelson/passing-data-props-children/)
