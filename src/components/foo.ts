import { h, VNode } from 'maquette';

export default function foo (): VNode {
  return h('div', [
    h('h1', `Foo`)
  ]);
}