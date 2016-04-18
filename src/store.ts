import { createStore, applyMiddleware } from 'redux';
import { createHistory, createLocation } from 'history';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import main from './reducers/main';
import { NAVIGATE } from './actions/navigate';
import updateLocation from './actions/update-location';
import historyMiddleware from './middleware/history';

const history = createHistory();

const initalState = {
  location: history.createLocation(window.location.pathname)
};

const store = createStore(
  main,
  initalState,
  applyMiddleware(
    thunk,
    promiseMiddleware(),
    historyMiddleware(history)
  )
);

history.listen(location => {
  store.dispatch(updateLocation(location));
});

export default store;
export const dispatch = store.dispatch;