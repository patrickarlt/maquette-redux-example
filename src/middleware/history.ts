import { NAVIGATE } from '../actions/navigate';

export default function historyMiddleware (history: HistoryModule.History): Redux.Middleware {
  return store => next => action => {
    let result = next(action);

    if (action.type === NAVIGATE) {
      history.push(action.payload.location);
    }

    return result;
  }
}