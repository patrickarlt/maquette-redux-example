import { h, VNode } from 'maquette';

function afterCreate (element, projectionOptions, vnodeSelector, properties, children) {
  console.log('root afterCreate', element, projectionOptions, vnodeSelector, properties, children);
}

function afterUpdate (element, projectionOptions, vnodeSelector, properties, children) {
  console.log('root afterUpdate', element, projectionOptions, vnodeSelector, properties, children);
}

export default function root (state): VNode {
  return h('div',{
    afterCreate,
    afterUpdate
  }, [
    h('h1', `Root`)
  ]);
}