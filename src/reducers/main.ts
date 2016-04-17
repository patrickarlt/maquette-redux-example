export default function counter(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, {
        counter: ++state.counter
      });
    case 'DECREMENT':
    return Object.assign({}, {
      counter: --state.counter
    });
    default:
      return state
  }
}