import { QCheckBox, NodeWidget } from '@nodegui/nodegui';
import { AbstractButtonProps, abstractButtonPropSetters } from '../AbstractButton/VNAbstractButton';
import { VNWidget } from '../config';
import { PropSetters, Prop } from '../../renderer/patchProp';

/**
 * The checkbox widget allows users to create and render native checkboxes in the app.
 * This widget is based on [NodeGui's QCheckBox](https://docs.nodegui.org/docs/api/generated/classes/qcheckbox)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-checkbox @clicked="checkboxClicked">Check box label</vn-checkbox>
 * </template>
 *
 * <script>
 *  export default {
 *    setup() {
 *      return {
 *        checkboxClicked: (isChecked) => {
 *          console.log("The checkbox is ", isChecked ? "checked" : "not checked")
 *        }
 *      }
 *    }
 *  }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![checkbox-demo](/img/vn-checkbox.png)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-checkbox` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface CheckboxProps extends AbstractButtonProps {
  /**
   * Sets whether the Checkbox border is raised. [QPushCheckbox: setFlat](https://docs.nodegui.org/docs/api/QPushCheckbox#Checkboxsetflatisflat)
   */
  checked?: boolean;
}

export const CheckboxPropsSetters: PropSetters<VNCheckbox, CheckboxProps> = {
  ...abstractButtonPropSetters,
  checked: (widget: VNCheckbox, _, nextValue: boolean) => {
    widget.setChecked(nextValue);
  },
};

/** @internal */
export class VNCheckbox extends QCheckBox implements VNWidget<CheckboxProps> {
  insertChild() {
    throw new Error('Cannot add child to checkboxes');
  }

  patchProp(
    key: keyof CheckboxProps,
    prevValue: Prop<CheckboxProps, typeof key>,
    nextValue: Prop<CheckboxProps, typeof key>,
  ) {
    const propSetter = CheckboxPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  removeChild() {
    throw new Error('Cannot remove/add child to checkboxes');
  }

  insertBefore() {
    throw new Error('Cannot add child to checkboxes');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('checkboxes cannot have children');
  }
}
