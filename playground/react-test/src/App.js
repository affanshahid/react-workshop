import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTodoBox from './components/AddTodoBox';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <AddTodoBox />
        <TodoList />
      </>
    );
  }
}

// 1st arguemnt | The stuff you want from the store
// 2nd argument | Actions you want to dispatch
export default App;