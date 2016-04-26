import { h, VNode } from 'maquette';

export default function bar (RenderHandler): VNode {
  return h('div', [
    h('h1', `Bar`)
  ]);
}