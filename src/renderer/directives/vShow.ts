import { ObjectDirective } from '@vue/runtime-core';
import { NodeWidget } from '@nodegui/nodegui';

const setDisplay = (el: NodeWidget<any>, value: boolean) => {
  if (value) return el.show();
  return el.hide();
};

export const vShow: ObjectDirective<NodeWidget<any>> = {
  beforeMount(el, { value }) {
    setDisplay(el, value);
  },
  updated(el, { value, oldValue }) {
    if (value === oldValue) return;
    setDisplay(el, value);
  },
  beforeUnmount(el) {
    setDisplay(el, true);
  },
};
