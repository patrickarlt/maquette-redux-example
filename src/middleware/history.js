export default function historyMiddleware (history) {
  return store => next => action => {
    let result = next(action);

    if (action.type === NAVIGATE) {
      history.push(action.location);
    }

    return result;
  }
}