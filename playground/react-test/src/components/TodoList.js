import React from 'react';
import TodoItem from "./TodoItem";
import { connect } from 'react-redux';

export function TodoList (props) {
  return (
    <ul>
      {props.todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
    </ul>
  );
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
