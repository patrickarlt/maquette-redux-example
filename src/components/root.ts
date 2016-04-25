import { h, VNode } from 'maquette';

export default function root (state): VNode {
  return h('div', [
    h('h1', `Root`)
  ]);
}