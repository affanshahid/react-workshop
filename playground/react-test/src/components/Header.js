import React from 'react';

export default function Header(props) {
  return (
    <header className="app-header">
      Todo App
    {'      '}
    {props.todoCount}
    </header>
  )
}
