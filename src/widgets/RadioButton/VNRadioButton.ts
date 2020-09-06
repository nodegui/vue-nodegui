import { QRadioButton, NodeWidget } from '@nodegui/nodegui';
import { AbstractButtonProps, abstractButtonPropSetters } from '../AbstractButton/VNAbstractButton';
import { VNWidget } from '../config';
import { PropSetters, Prop } from '../../renderer/patchProp';

export interface RadioButtonProps extends AbstractButtonProps {
    // TODO: add more soon
}

export const RadioButtonPropsSetters: PropSetters<VNRadioButton, RadioButtonProps> = {
  ...abstractButtonPropSetters,
  // TODO: add more soon
};

/** @internal */
export class VNRadioButton extends QRadioButton implements VNWidget<RadioButtonProps> {
  insertChild() {
    throw new Error('Cannot add child to RadioButtons');
  }

  patchProp(
    key: keyof RadioButtonProps,
    prevValue: Prop<RadioButtonProps, typeof key>,
    nextValue: Prop<RadioButtonProps, typeof key>,
  ) {
    const propSetter = RadioButtonPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  removeChild() {
    throw new Error('Cannot remove/add child to RadioButtons');
  }

  insertBefore() {
    throw new Error('Cannot add child to RadioButtons');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('RadioButtons cannot have children');
  }
}
