import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [
      'TODO #1',
      'TODO #2',
      'TODO #3',
      'TODO #4',
    ]
  }

  render() {
    return (
      <div className="App">
        <header>My Todo App Total:{this.state.todos.length}</header>
        <input />
        <button />
        {this.state.todos.map((t, i) => <p key={i}>{t}</p>)}
      </div>
    );
  }
}

export default App;
