const initialState = {
  todos: []
};

/// Actions

// Adding todos
function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    todo
  };
}

///

const todoText = ...;
const action = addTodo(todo);
dispatch(action);

// Reducer
function reducer(state, action) {
  
}