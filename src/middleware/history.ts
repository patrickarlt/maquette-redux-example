import { NAVIGATE } from '../actions/navigate';

export default function historyMiddleware (history: HistoryModule.History): Redux.Middleware {
  return store => next => action => {
    let current = store.getState();
    let result = next(action);

    if (action.type === NAVIGATE && (current.location.pathname !== action.payload.pathname)) {
      history.push(action.payload);
    }

    return result;
  }
}