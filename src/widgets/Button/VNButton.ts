import { QPushButton } from '@nodegui/nodegui';
import { VNWidget } from '../config';
import { viewPropsSetters, ViewProps } from '../View/VNView';
import { PropSetters, Prop } from '../../renderer/patchProp';

export interface ButtonProps extends ViewProps {
  /**
   * Sets whether the button border is raised. [QPushButton: setFlat](https://docs.nodegui.org/docs/api/QPushButton#buttonsetflatisflat)
   */
  flat?: boolean;
}

export const buttonPropsSetters: PropSetters<VNButton, ButtonProps> = {
  ...viewPropsSetters,
  flat: (widget: VNButton, _, nextValue: boolean) => {
    widget.setFlat(nextValue);
  },
};

export class VNButton extends QPushButton implements VNWidget<ButtonProps> {
  insertChild() {
    throw new Error('Cannot add child to buttons');
  }

  patchProp(
    key: keyof ButtonProps,
    prevValue: Prop<ButtonProps, typeof key>,
    nextValue: Prop<ButtonProps, typeof key>,
  ) {
    const propSetter = buttonPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }
}
