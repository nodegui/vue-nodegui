import {
  QSlider, NodeWidget, TickPosition, Orientation,
} from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps, viewPropsSetters } from '../View/VNView';

/**
 * The slider widget allows users to render native sliders into their apps.
 * It is based on the [NodeGui's QSlider](https://docs.nodegui.org/docs/api/generated/classes/qslider)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *    <vn-slider v-model="sliderValue" :maximum="100" :minimum="10" :orientation="1" />
 *    <vn-text>The slider value is: {{sliderValue}}</vn-text>
 *  </vn-view>
 * </template>
 *
 * <script>
 *  import { ref } from 'vue';
 *
 *  export default {
 *   setup() {
 *     const sliderValue = ref(0);
 *
 *     return {
 *       sliderValue
 *     }
 *   }
 *  };
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![vn-slider-demo](/img/vn-slider.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-slider` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface SliderProps extends ViewProps {
  tickInterval?: number;
  tickPosition?: TickPosition;
  orientation?: Orientation;
  minimum?: number;
  maximum?: number;
  invertedAppearance?: boolean;
  invertedControls?: boolean;
  pageStep?: number;
  singleStep?: number;
  isSliderDown?: boolean;
  sliderPosition?: number;
  hasTracking?: boolean;
  value?: number;
}

export const sliderPropsSetters: PropSetters<VNSlider, SliderProps> = {
  ...viewPropsSetters,
  tickInterval(widget: VNSlider, _, nextValue: number) {
    widget.setTickInterval(nextValue);
  },
  tickPosition(widget: VNSlider, _, nextValue: TickPosition) {
    widget.setTickPosition(nextValue);
  },
  invertedAppearance(widget: VNSlider, _, nextValue: boolean) {
    widget.setInvertedAppearance(nextValue);
  },
  invertedControls(widget: VNSlider, _, nextValue: boolean) {
    widget.setInvertedControls(nextValue);
  },
  maximum(widget: VNSlider, _, nextValue: number) {
    widget.setMaximum(nextValue);
  },
  minimum(widget: VNSlider, _, nextValue: number) {
    widget.setMinimum(nextValue);
  },
  orientation(widget: VNSlider, _, nextValue: Orientation) {
    widget.setOrientation(nextValue);
  },
  pageStep(widget: VNSlider, _, nextValue: number) {
    widget.setPageStep(nextValue);
  },
  singleStep(widget: VNSlider, _, nextValue: number) {
    widget.setSingleStep(nextValue);
  },
  isSliderDown(widget: VNSlider, _, nextValue: boolean) {
    widget.setSliderDown(nextValue);
  },
  sliderPosition(widget: VNSlider, _, nextValue: number) {
    widget.setSliderPosition(nextValue);
  },
  hasTracking(widget: VNSlider, _, nextValue: boolean) {
    widget.setTracking(nextValue);
  },
  value(widget: VNSlider, _, nextValue: number) {
    widget.setValue(nextValue);
  },
};

/** @internal */
export class VNSlider extends QSlider implements VNWidget<SliderProps> {
  insertChild() {
    throw new Error('Cannot add child to slider elements');
  }

  patchProp(
    key: keyof SliderProps,
    prevValue: Prop<SliderProps, typeof key>,
    nextValue: Prop<SliderProps, typeof key>,
  ) {
    const propSetter = sliderPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  removeChild() {
    throw new Error('Cannot add child to slider elements');
  }

  insertBefore() {
    throw new Error('Cannot add child to slider elements');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('Cannot add child to slider elements');
  }
}
