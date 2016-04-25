import { h, VNode } from 'maquette';

export default function notFound (state): VNode {
  return h('div', [
    h('h1', `Not Found`)
  ]);
}