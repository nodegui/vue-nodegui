import { QSpinBox, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { ViewProps, viewPropsSetters } from '../View/VNView';
import { PropSetters, Prop } from '../../renderer/patchProp';

/**
 * The SpinBox component provides the ability to add and manipulate native spin box widgets.
 * It is based on [NodeGui's QSpinBox](https://docs.nodegui.org/docs/api/generated/classes/qspinbox/).
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *    <vn-text>How many slices of cake ($2) would you like?</vn-text>
 *    <vn-spinbox v-model="spinBoxValue"/>
 *    <vn-text>Total cost: ${{spinBoxValue * 2}}</vn-text>
 *  </vn-view>
 * </template>
 *
 * <script>
 *   export default {
 *     data() {
 *       return {
 *         spinBoxValue: 0
 *       }
 *     }
 *   }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![spinbox-demo](/img/vn-spinbox.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-spinbox` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */

export interface SpinBoxProps extends ViewProps {
  prefix?: string;
  suffix?: string;
  singleStep?: number;
  range?: Range;
  value?: number;
}

const spinBoxPropsSetters: PropSetters<VNSpinBox, SpinBoxProps> = {
  ...viewPropsSetters,
  prefix(widget: VNSpinBox, _, prefix: string) {
    widget.setPrefix(prefix);
  },
  suffix(widget: VNSpinBox, _, suffix: string) {
    widget.setSuffix(suffix);
  },
  singleStep(widget: VNSpinBox, _, step: number) {
    widget.setSingleStep(step);
  },
  range(widget: VNSpinBox, _, range: Range) {
    widget.setRange(range.minimum, range.maximum);
  },
  value(widget: VNSpinBox, _, value: number) {
    widget.setValue(value);
  },
};

/** @internal */
export class VNSpinBox extends QSpinBox implements VNWidget<SpinBoxProps> {
  patchProp(
    key: keyof SpinBoxProps,
    prevValue: Prop<SpinBoxProps, typeof key>,
    nextValue: Prop<SpinBoxProps, typeof key>,
  ) {
    const propSetter = spinBoxPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  insertChild() {
    throw new Error('Cannot add child to SpinBox elements');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('SpinBox elements cannot have children');
  }

  insertBefore() {
    throw new Error('Cannot add child to SpinBox elements');
  }

  removeChild() {
    throw new Error('Cannot remove/add child to SpinBox elements');
  }
}

type Range = {
  minimum: number;
  maximum: number;
};
