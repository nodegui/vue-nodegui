import {
  QSlider, NodeWidget, TickPosition, Orientation,
} from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps, viewPropsSetters } from '../View/VNView';

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
