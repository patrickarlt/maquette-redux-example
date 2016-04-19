import { h, VNode } from 'maquette';
import { dispatch } from '../store';
import navigate from '../actions/navigate';
import router from '../router';

function navigateToFoo () {
  dispatch(navigate('/foo'));
}

function navigateToBar () {
  dispatch(navigate('/bar'));
}

export default function app (state: any): VNode {
  let match = router.recognize(state.location.pathname);
  let child = match[0].handler;

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
    child()
  ]);
}