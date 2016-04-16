import { h } from 'maquette';
import { dispatch } from '../store';
import navigate from '../actions/navigate';

function navigateToFoo () {
  dispatch(navigate('/foo'));
}

function navigateToBar () {
  dispatch(navigate('/bar'));
}

export default function app (state) {
  return h('div', [
    h('h1', `Path: ${state.location.pathname}`),
    h('button', {
      type: 'button',
      onclick: navigateToFoo
    }, ['/foo']),
    h('button', {
      type: 'button',
      onclick: navigateToBar
    }, ['/bar']),
  ]);
}