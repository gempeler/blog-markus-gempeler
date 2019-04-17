---
date: 2019-04-17T13:00:00
title: React Uncontrolled Component
spoiler: Was ist eine "Uncontrolled Component" in React?
tags: ["React"]
category: info
---

Wie es bereits der Name sagt: "Uncontrolled Components" entziehen sich der Kontrolle durch React. Wir sprechen dabei von HTML Elementen, deren Zustand ("state") **nicht** in einer React Komponente als `state` Eigenschaft gespeichert ist. React kann mit Hilfe von `ref` auf den Zustand der Komponente zugreiffen.

Hier ein Beispiel:

```javascript
class Form extends Component {

  onInputChange (event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.onInputChange}/>
      </div>
    );
  }
}
```

Will man Werte aus einem unkontrollierten Input Feld ziehen, dann kann man das mit `createRef()` machen:

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```



