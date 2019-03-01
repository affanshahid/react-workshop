import React from 'react';
import { connect } from 'react-redux';
import AddTodoBox from './AddTodoBox';

export function Header(props) {
  return (
    <header className="app-header">
      Todo App
    {'      '}
    {props.todoCount}
    <AddTodoBox />
    </header>
  )
}

const mapStateToProps = (state) => ({
  todoCount: state.todos.length
});

const mapDispatchToProps = (dispatch) => {
   addTodo: dispatch({type: '1234'})
 }

export default connect(mapStateToProps)(Header);

function sum(b, a){ return a + b;}

var result = connect(Header)

// STORE
//   - STATE     // Data
//   - DISPATCH  // A way to change the data (dispatch actions)

// Store
// - mapStateToProps = function()
//