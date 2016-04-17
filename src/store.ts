import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import main from './reducers/main';

const store = createStore(
  main,
  applyMiddleware(
    thunk,
    promiseMiddleware()
  )
);

export default store;
export const dispatch = store.dispatch;