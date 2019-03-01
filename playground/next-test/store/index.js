import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

function makeStore(initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware()));
}

export default makeStore;
