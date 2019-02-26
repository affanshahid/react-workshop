import React from 'react';
import AddTodoBox from './AddTodoBox';

export default function TodoItem(props) {
  return (
    <div>
      <li>{props.todo}</li>
    </div>
  );
}