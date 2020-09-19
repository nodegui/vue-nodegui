import { QPushButton, NodeWidget } from '@nodegui/nodegui';
import { AbstractButtonProps, abstractButtonPropSetters } from '../AbstractButton/VNAbstractButton';
import { VNWidget } from '../config';
import { PropSetters, Prop } from '../../renderer/patchProp';

/**
 * The button widget allows users to create and render native buttons in the app.
 * This widget is based on [NodeGui's QPushButton](https://docs.nodegui.org/docs/api/QPushButton)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-button @clicked="buttonClicked">
 *    Test button
 *  </vn-button>
 * </template>
 *
 * <script>
 *  export default {
 *    setup() {
 *      return {
 *        buttonClicked: () => console.log("the button was clicked")
 *      }
 *    }
 *  }
 * </script>
 * ```
 *
 * ## What does it look like?
 *
 * ![test](/img/vn-button.png)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-button` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface ButtonProps extends AbstractButtonProps {
  /**
   * Sets whether the button border is raised. [QPushButton: setFlat](https://docs.nodegui.org/docs/api/QPushButton#buttonsetflatisflat)
   */
  flat?: boolean;
}

export const buttonPropsSetters: PropSetters<VNButton, ButtonProps> = {
  ...abstractButtonPropSetters,
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
