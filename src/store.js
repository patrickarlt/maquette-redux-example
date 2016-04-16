import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createHistory, createLocation } from 'history';
import main from './reducers/main';
import { NAVIGATE } from './actions/navigate';
import updateLocation from './actions/update-location';
import historyMiddleware from "./middleware/history.js";
import loggerMiddleware from './middleware/logger.js';

const history = createHistory();

const initalState = {
  location: createLocation(window.pathname)
};

const store = createStore(
  main,
  initalState,
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware(),
    historyMiddleware(history),
    loggerMiddleware()
  )
);

history.listen(location => {
  store.dispatch(updateLocation(location));
});

export default store;
export const dispatch = store.dispatch;