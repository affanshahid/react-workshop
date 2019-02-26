import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTodoBox from './components/AddTodoBox';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

class App extends Component {
  handleAddTodo = (todo) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo]
    }));
  }

  state = {
    todos: [
      'Water the dog',
      'TODO #2',
      'TODO #3',
      'TODO #4',
    ],
    todoText: 'Placeholder...'
  };

  render() {
    return (
      <>
        <Header todoCount={this.state.todos.length} />
        <AddTodoBox
          onAddTodo={this.handleAddTodo}
        />
        <TodoList todos={this.state.todos} />
      </>
    );
  }
}

export default App;
