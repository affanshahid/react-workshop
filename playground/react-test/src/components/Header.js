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

export default connect(mapStateToProps)(Header);
