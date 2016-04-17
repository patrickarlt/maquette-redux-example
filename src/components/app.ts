import { h } from 'maquette';
import { dispatch } from '../store';

function increment () {
  dispatch({
    type: 'INCREMENT'
  });
}

function decrement () {
  dispatch({
    type: 'DECREMENT'
  });
}

export default function app (state) {
  return h('div', [
    h('h1', `Counter: ${state}`),
    h('button', {
      type: 'button',
      onclick: decrement
    }, ['DECREMENT']),
    h('button', {
      type: 'button',
      onclick: increment
    }, ['INCREMENT']),
  ]);
}