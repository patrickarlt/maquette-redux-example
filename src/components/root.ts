import { h, VNode } from 'maquette';

export default function root (): VNode {
  return h('div', [
    h('h1', `Root`)
  ]);
}