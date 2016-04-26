import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import main from './reducers/main';
import historyUpdate from './actions/history-update';
import historyMiddleware from './middleware/history';
import history from './history';

const initalState = {
  location: history.createLocation(window.location)
};

const middleware = [
  thunk,
  promiseMiddleware(),
  historyMiddleware(history)
];

const store = createStore(
  main,
  initalState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
export const dispatch = store.dispatch;