import { h, VNode } from 'maquette';

function afterCreate (element, projectionOptions, vnodeSelector, properties, children) {
  console.log('bar afterCreate', element, projectionOptions, vnodeSelector, properties, children);
}

function afterUpdate (element, projectionOptions, vnodeSelector, properties, children) {
  console.log('bar afterUpdate', element, projectionOptions, vnodeSelector, properties, children);
}

export default function bar (RenderHandler): VNode {
  return h('div',{
    afterCreate,
    afterUpdate
  }, [
    h('h1', `Bar`)
  ]);
}