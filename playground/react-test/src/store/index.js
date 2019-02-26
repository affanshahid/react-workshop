import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

let existingState = undefined;

// if (localStorage.getItem('__PERSIST__') != null) {
//   existingState = JSON.parse(localStorage.getItem('__PERSIST__'));
// }

const store = createStore(reducer, existingState, composeWithDevTools(applyMiddleware()));

function logState() {
  console.log(store.getState());
  localStorage.setItem('__PERSIST__', JSON.stringify(store.getState()));
}

store.subscribe(logState);

export default store;