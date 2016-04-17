import 'es6-shim';
import store from './store';
import { createProjector } from 'maquette';
import app from './components/app';

const projector = createProjector({});

store.subscribe(function () {
  projector.scheduleRender();
});

projector.append(document.body, function () {
  return app(store.getState());
});
