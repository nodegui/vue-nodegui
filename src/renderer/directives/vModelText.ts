import { ObjectDirective } from '@vue/runtime-core';
import { VNLineEdit } from 'widgets/LineEdit/VNLineEdit';

type ModelDirective<T> = ObjectDirective<T & { _assign: Function }>

// TODO: implement for other inputs as they are added
// Currently only implemented for text input
export const vModelText: ModelDirective<VNLineEdit> = {
  beforeMount: (el, { value }, vnode) => {
    el.setText(value);
    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    el._assign = vnode.props!['onUpdate:modelValue'] as Function;
    el.addEventListener('textChanged', (text) => {
      // eslint-disable-next-line no-underscore-dangle
      el._assign(text);
    });
  },
  beforeUpdate: (el, { value, oldValue }) => {
    if (value === oldValue) {
      return;
    }
    el.setText(value);
  },
};
