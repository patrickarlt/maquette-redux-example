import { h, VNode } from 'maquette';

export default function bar (): VNode {
  return h('div', [
    h('h1', `Bar`)
  ]);
}