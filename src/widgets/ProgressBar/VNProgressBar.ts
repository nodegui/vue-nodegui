import { QProgressBar, Orientation, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { ViewProps, viewPropsSetters } from '../View/VNView';
import { PropSetters, Prop } from '../../renderer/patchProp';

export interface ProgressBarProps extends ViewProps {
  value?: number;
  minimum?: number;
  maximum?: number;
  orientation?: Orientation;
}

const progressBarPropsSetters: PropSetters<VNProgressBar, ProgressBarProps> = {
  ...viewPropsSetters,
  value(widget: VNProgressBar, _, value: number) {
    widget.setValue(value);
  },
  minimum(widget: VNProgressBar, _, minimum: number) {
    widget.setMinimum(minimum);
  },
  maximum(widget: VNProgressBar, _, maximum: number) {
    widget.setMaximum(maximum);
  },
  orientation(widget: VNProgressBar, _, orientation: Orientation) {
    widget.setOrientation(orientation);
  },
};

/** @internal */
export class VNProgressBar extends QProgressBar implements VNWidget<ProgressBarProps> {
  patchProp(
    key: keyof ProgressBarProps,
    prevValue: Prop<ProgressBarProps, typeof key>,
    nextValue: Prop<ProgressBarProps, typeof key>,
  ) {
    const propSetter = progressBarPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  insertChild() {
    throw new Error('Cannot add child to ProgressBar elements');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('ProgressBar elements cannot have children');
  }

  insertBefore() {
    throw new Error('Cannot add child to ProgressBar elements');
  }

  removeChild() {
    throw new Error('Cannot remove/add child to ProgressBar elements');
  }
}
