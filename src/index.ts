import { ObjectDirective } from '@vue/runtime-core';
import { VNLineEdit } from 'widgets/LineEdit/VNLineEdit';

export { createApp } from './renderer';

type ModelDirective<T> = ObjectDirective<T & { _assign: Function }>

export const vModelText: ModelDirective<VNLineEdit> = {
  // @ts-ignore
  beforeMount: (el, { value }, vnode) => {
    el.setText(value);
    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    el._assign = vnode.props!['onUpdate:modelValue'] as Function;
    el.addEventListener('textChanged', (text) => {
      // eslint-disable-next-line no-underscore-dangle
      el._assign(text);
    });
  },
  beforeUpdate: (el, { value, oldValue }, vnode) => {
    if (value === oldValue) {
      return;
    }
    el.setText(value);
  },
};

export * from '@vue/runtime-core';
