import { ObjectDirective } from '@vue/runtime-core';
import { VNSpinBox } from 'widgets/SpinBox/VNSpinBox';

type ModelDirective<T> = ObjectDirective<T & { _assign: Function }>

export const vModelSpinBox: ModelDirective<VNSpinBox> = {
  beforeMount: (el, { value }, vnode) => {
    el.setValue(value);
    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    el._assign = vnode.props!['onUpdate:modelValue'] as Function;
    el.addEventListener('valueChanged', (spinBoxValue) => {
      // eslint-disable-next-line no-underscore-dangle
      el._assign(spinBoxValue);
    });
  },
  beforeUpdate: (el, { value, oldValue }) => {
    if (value === oldValue) {
      return;
    }
    el.setValue(value);
  },
};
