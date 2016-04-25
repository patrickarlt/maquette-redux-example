import 'es6-shim';
import store from './store';
import { createProjector } from 'maquette';
import app from './components/app';
import history from './history';
import historyUpdate from './actions/history-update';
import deepEqual = require('deep-equal');

const projector = createProjector({});

store.subscribe(function () {
  projector.scheduleRender();
});

projector.append(document.body, function () {
  return app(store.getState());
});

history.listen(function (location: HistoryModule.Location) {
  var oldState = Object.assign({}, store.getState().location, {key: null});
  var newState = Object.assign({}, location, {key: null});
  if (!deepEqual(oldState, newState)) {
    store.dispatch(historyUpdate(location));
  }
});
