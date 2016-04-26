import 'es6-shim';
import { createProjector } from 'maquette';
import store from './store';
import app from './components/app';
import history from './history';
import historyUpdate from './actions/history-update';

const projector = createProjector({});

/**
 * Whenever the store changes as the result of an action
 * tell Maquette to schedule another render of the virtual
 * DOM.
 */
store.subscribe(function () {
  projector.scheduleRender();
});

/**
 * Define the projector that will render the virtual DOM
 * and update the real DOM. We will simply append the app
 * to the <body>.
 */
projector.append(document.body, function () {
  return app(store.getState());
});

/**
 * Listen for any updates to the history that occur, like
 * the back button.
 */
history.listen(function (location: HistoryModule.Location) {
  store.dispatch(historyUpdate(location));
});
