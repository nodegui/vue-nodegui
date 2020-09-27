import { ObjectDirective } from '@vue/runtime-core';
import { VNSlider } from 'widgets/Slider/VNSlider';

type ModelDirective<T> = ObjectDirective<T & { _assign: Function }>

export const vModelSlider: ModelDirective<VNSlider> = {
  beforeMount: (el, { value }, vnode) => {
    el.setValue(value);
    // eslint-disable-next-line no-param-reassign, no-underscore-dangle
    el._assign = vnode.props!['onUpdate:modelValue'] as Function;
    el.addEventListener('sliderMoved', (sliderValue) => {
      // eslint-disable-next-line no-underscore-dangle
      el._assign(sliderValue);
    });
  },
  beforeUpdate: (el, { value, oldValue }) => {
    if (value === oldValue) {
      return;
    }
    el.setValue(value);
  },
};
