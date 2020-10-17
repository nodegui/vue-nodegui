import { ObjectDirective } from '@vue/runtime-core';
import { VNComboBox } from '../../widgets/ComboBox/VNComboBox';

type ModelDirective<T> = ObjectDirective<T & { _assign: Function }>

export const vModelComboBox: ModelDirective<VNComboBox> = {
  beforeMount: (el, { value }, vnode) => {
    el.setCurrentIndex(value);
    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    el._assign = vnode.props!['onUpdate:modelValue'] as Function;
    el.addEventListener('currentIndexChanged', (indexValue) => {
      // eslint-disable-next-line no-underscore-dangle
      el._assign(indexValue);
    });
  },
  beforeUpdate: (el, { value, oldValue }) => {
    if (value === oldValue) {
      return;
    }
    el.setCurrentIndex(value);
  },
};
