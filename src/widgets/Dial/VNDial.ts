import { NodeWidget, QDial } from '@nodegui/nodegui';
import { Prop, PropSetters } from 'renderer/patchProp';
import { VNWidget } from 'widgets/config';
import { ViewProps, viewPropsSetters } from '../View/VNView';

/**
 * The Dial provides ability to add and manipulate native dial slider widgets. It is based on
 * [NodeGui's QDial](https://docs.nodegui.org/docs/api/generated/classes/qdial/).
 *
 * ## Usage
 *
 * ```html
 * <template>
 *   <vn-view :style="'flex-direction: \'column\''">
 *    <vn-dial :notchesVisible="true" v-model="dialValue" />
 *    <vn-text>{{dialValue}}</vn-text>
 *   </vn-view>
 * </template>
 *
 * <script>
 * import { ref } from 'vue';
 *
 * export default {
 *   setup() {
 *    const dialValue = ref(0);
 *    return {
 *      dialValue
 *    };
 *   }
 * }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![dial-demo](/img/vn-dial.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-dial` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface DialProps extends ViewProps {
  notchesVisible?: boolean;
  wrapping?: boolean;
  notchTarget?: number;
}

const dialPropsSetters: PropSetters<VNDial, DialProps> = {
  ...viewPropsSetters,
  notchesVisible: (widget: VNDial, _, nextValue: boolean) => {
    widget.setNotchesVisible(nextValue);
  },
  wrapping: (widget: VNDial, _, nextValue: boolean) => {
    widget.setWrapping(nextValue);
  },
  notchTarget: (widget: VNDial, _, nextValue: number) => {
    widget.setNotchTarget(nextValue);
  },
};

/** @internal */
export class VNDial extends QDial implements VNWidget<DialProps> {
  patchProp(
    key: keyof DialProps,
    prevValue: Prop<DialProps, typeof key>,
    nextValue: Prop<DialProps, typeof key>,
  ) {
    const propSetter = dialPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  insertChild() {
    throw new Error('Cannot add child to Dial elements');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('Dial elements cannot have children');
  }

  insertBefore() {
    throw new Error('Cannot add child to Dial elements');
  }

  removeChild() {
    throw new Error('Cannot remove/add child to Dial elements');
  }
}
