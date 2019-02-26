export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(todoText) {
  return {
    type: ADD_TODO,
    todo: todoText
  };
}

export function deleteTodo(todoIndex) {
  return {
    type: DELETE_TODO,
    todoIndex: todoIndex
  };
}
