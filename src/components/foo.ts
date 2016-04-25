import { h, VNode } from 'maquette';

export default function foo (state): VNode {
  return h('div', [
    h('h1', `Foo`)
  ]);
}