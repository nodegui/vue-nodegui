import { QPushButton, NodeWidget } from '@nodegui/nodegui';
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

/** @internal */
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

  removeChild() {
    throw new Error('Cannot remove/add child to buttons');
  }

  insertBefore() {
    throw new Error('Cannot add child to buttons');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('buttons cannot have children');
  }
}
