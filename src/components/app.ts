import { h, VNode } from 'maquette';
import { dispatch } from '../store';
import navigate from '../actions/navigate';
import router from '../router';
import notFound from './not-found';

function navigateToFoo () {
  dispatch(navigate('/foo'));
}

function navigateToBar () {
  dispatch(navigate('/bar'));
}

function navigateToRoot () {
  dispatch(navigate('/'));
}

export default function app (state: any): VNode {
  let match = router.recognize(state.location.pathname);
  let child = match ? match[0].handler(state) : notFound(state);

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
    h('button', {
      type: 'button',
      onclick: navigateToRoot
    }, ['/']),
    child
  ]);
}