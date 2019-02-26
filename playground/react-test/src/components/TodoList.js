import React from 'react';
import TodoItem from "./TodoItem";

export default function TodoList (props) {
  return (
    <ul>
      {props.todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
    </ul>
  );
}