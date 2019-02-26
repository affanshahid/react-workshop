import { ADD_TODO, DELETE_TODO } from './action'

const inititalState = {
  todos: [
    'Water the dog1',
    'TODO #2',
    'TODO #3',
    'TODO #45'
  ],
}

// contract: Take the current state, take the given action, RETURN the new state
export default function reducer(state=inititalState, action) {
  switch (action.type) {
    case ADD_TODO: return {
      todos: [...state.todos, action.todo]
    };
    case DELETE_TODO: return {
      todos: state.todos.filter((_, index) => index != action.todoIndex)
    }
    default: return state;
  }
}
