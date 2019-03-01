import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderABCDEF from './components/Header';
import AddTodoBoxTTT from './components/AddTodoBox';
import TodoList from './components/TodoList';
import ShowWindowWidth from './components/ShowWindowWidth';
import { withLayout } from './components/Layout';

class App extends Component {
  render() {
    return (
      <>
        <AddTodoBoxTTT />
        <TodoList />
        <ShowWindowWidth>
          {
            (width) => console.log('TESTING:', width)
          }
        </ShowWindowWidth>
      </>
    );
  }
}

// 1st arguemnt | The stuff you want from the store
// 2nd argument | Actions you want to dispatch
export default withLayout(App);