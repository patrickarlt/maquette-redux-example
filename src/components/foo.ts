import { h, VNode } from 'maquette';

function afterCreate (element, projectionOptions, vnodeSelector, properties, children) {
  console.log('foo afterCreate', element, projectionOptions, vnodeSelector, properties, children);
}

function afterUpdate (element, projectionOptions, vnodeSelector, properties, children) {
  console.log('foo afterUpdate', element, projectionOptions, vnodeSelector, properties, children);
}

export default function foo (state): VNode {
  return h('div',{
    afterCreate,
    afterUpdate
  }, [
    h('h1', `Foo`)
  ]);
}