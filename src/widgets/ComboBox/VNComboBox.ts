import {
  QComboBox, NodeWidget, QSize, QVariant, SizeAdjustPolicy, InsertPolicy, QIcon,
} from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { ViewProps, viewPropsSetters } from '../View/VNView';
import { PropSetters, Prop } from '../../renderer/patchProp';

/**
 * The ComboBox component provides the ability to add and manipulate native combobox widgets.
 * It is based on [NodeGui's QComboBox](https://docs.nodegui.org/docs/api/generated/classes/qcombobox/).
 *
 * ## Usage
 *
 * ```html
 * <template>
 *   <vn-view>
 *     <vn-text>Choose a color</vn-text>
 *     <vn-combobox :items="data" v-model="index" />
 *     <vn-text>You have picked: {{data[index].text}}</vn-text>
 *   </vn-view>
 * </template>
 *
 * <script>
 *   import { ref } from 'vue';
 *
 *   export default {
 *     setup() {
 *       const index = ref(0);
 *       const data = [
 *         {text: "Red"},
 *         {text: "Yellow"},
 *         {text: "Blue"},
 *         {text: "Green"},
 *       ];
 *
 *       return {
 *         index,
 *         data,
 *       }
 *     }
 *   };
 * </script>
 *
 * ```
 *
 * ## What it looks like?
 *
 * ![combobox-demo](/img/vn-combobox.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-combobox` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */

export interface ComboBoxProps extends ViewProps {
  items?: ComboBoxItem[];
  count?: number;
  iconSize?: QSize;
  frame?: boolean;
  currentIndex?: number;
  currentData?: QVariant;
  currentText?: string;
  duplicatesEnabled?: boolean;
  editable?: boolean;
  insertPolicy?: InsertPolicy;
  maxCount?: number;
  maxVisibleItems?: number;
  minimumContentsLength?: number;
  modelColumn?: number;
  sizeAdjustPolicy?: SizeAdjustPolicy;
}

type ComboBoxItem = {
  text: string;
  icon?: QIcon;
  userData?: QVariant;
};

const comboBoxPropsSetters: PropSetters<VNComboBox, ComboBoxProps> = {
  ...viewPropsSetters,
  items(widget: VNComboBox, _, items: ComboBoxItem[]) {
    widget.clear();
    items.forEach((item) => {
      widget.addItem(item.icon, item.text, item.userData);
    });
  },
  count(widget: VNComboBox, _, count: number) {
    widget.setProperty('count', count);
  },
  iconSize(widget: VNComboBox, _, iconSize: QSize) {
    widget.setProperty('iconSize', iconSize.native);
  },
  frame(widget: VNComboBox, _, frame: boolean) {
    widget.setProperty('frame', frame);
  },
  currentIndex(widget: VNComboBox, _, currentIndex: number) {
    widget.setCurrentIndex(currentIndex);
  },
  currentData(widget: VNComboBox, _, currentData: QVariant) {
    widget.setProperty('currentData', currentData.native);
  },
  currentText(widget: VNComboBox, _, currentText: string) {
    widget.setCurrentText(currentText);
  },
  editable(widget: VNComboBox, _, editable: boolean) {
    widget.setEditable(editable);
  },
  duplicatesEnabled(widget: VNComboBox, _, duplicatesEnabled: boolean) {
    widget.setProperty('duplicatesEnabled', duplicatesEnabled);
  },
  insertPolicy(widget: VNComboBox, _, insertPolicy: InsertPolicy) {
    widget.setProperty('insertPolicy', insertPolicy);
  },
  maxCount(widget: VNComboBox, _, maxCount: number) {
    widget.setProperty('maxCount', maxCount);
  },
  maxVisibleItems(widget: VNComboBox, _, maxVisibleItems: number) {
    widget.setMaxVisibleItems(maxVisibleItems);
  },
  minimumContentsLength(widget: VNComboBox, _, minimumContentsLength: number) {
    widget.setProperty('minimumContentsLength', minimumContentsLength);
  },
  modelColumn(widget: VNComboBox, _, modelColumn: number) {
    widget.setProperty('modelColumn', modelColumn);
  },
  sizeAdjustPolicy(widget: VNComboBox, _, sizeAdjustPolicy: SizeAdjustPolicy) {
    widget.setSizeAdjustPolicy(sizeAdjustPolicy);
  },
};

/** @internal */
export class VNComboBox extends QComboBox implements VNWidget<ComboBoxProps> {
  patchProp(
    key: keyof ComboBoxProps,
    prevValue: Prop<ComboBoxProps, typeof key>,
    nextValue: Prop<ComboBoxProps, typeof key>,
  ) {
    const propSetter = comboBoxPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  insertChild() {
    throw new Error('Cannot add child to ComboBox elements');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('ComboBox elements cannot have children');
  }

  insertBefore() {
    throw new Error('Cannot add child to ComboBox elements');
  }

  removeChild() {
    throw new Error('Cannot remove/add child to ComboBox elements');
  }
}
