---
date: 2019-04-17T12:00:00
title: React Controlled Component
spoiler: Was ist eine "Controlled Component" in React?
tags: ["React"]
category: info
---

In HTML haben form Elemente wie `<input>`, `<textarea>` oder `<select>` einen eigenen Zustand.

```html
      <form>
        <label>
          Name:
          <input type="text" value="Gempeler"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
```
React speichert den Zustand normalerweise in der `state` Eigenschaft von Komponenten. Updates werden mit `setState()` gemacht.

Ziel ist es dass der state von React die “single source of truth” ist! Auf diese Art und Weise kontrolliert React was in der Form angezeigt wird und reagiert auch auf User Input mit einem entsprechenden Callback:

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Mehr Informationen gibt es [in der offiziellen React Doku](https://reactjs.org/docs/forms.html).