import { QRadioButton, NodeWidget } from '@nodegui/nodegui';
import { AbstractButtonProps, abstractButtonPropSetters } from '../AbstractButton/VNAbstractButton';
import { VNWidget } from '../config';
import { PropSetters, Prop } from '../../renderer/patchProp';

/**
 * The radio button widget allows users to create and render native radio buttons in the app.
 * It is based on [NodeGui's QRadioButton](https://docs.nodegui.org/docs/api/generated/classes/qradiobutton)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *    <vn-text>What is your favorite colour?</vn-text>
 *    <vn-radio-button>Blue</vn-radio-button>
 *    <vn-radio-button>Green</vn-radio-button>
 *    <vn-radio-button>Yellow</vn-radio-button>
 *  </vn-view>
 * </template>
 *
 * <script>
 *  export default { }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![radio-button-demo](/img/vn-radio-button.png)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-radio-button` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
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
