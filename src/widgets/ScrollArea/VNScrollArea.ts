import { QScrollArea, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps, viewPropsSetters } from '../View/VNView';

export interface ScrollAreaProps extends ViewProps {
    widgetResizable?: boolean;
}

export const scrollAreaPropsSetters: PropSetters<VNScrollArea, ScrollAreaProps> = {
  ...viewPropsSetters,
  widgetResizable(widget: VNScrollArea, _, nextValue: boolean) {
    widget.setWidgetResizable(nextValue);
  },
};

/** @internal */
export class VNScrollArea extends QScrollArea implements VNWidget<ScrollAreaProps> {
  insertChild(child: NodeWidget<any>) {
    if (this.contentWidget) {
      console.warn('Scroll Area can only have one child');
      return;
    }
    this.setWidget(child);
  }

  patchProp(
    key: keyof ScrollAreaProps,
    prevValue: Prop<ScrollAreaProps, typeof key>,
    nextValue: Prop<ScrollAreaProps, typeof key>,
  ) {
    const propSetter = scrollAreaPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  removeChild(child: NodeWidget<any>) {
    const childToRemove = this.takeWidget();
    if (childToRemove) {
      childToRemove.close();
    }

    child.close();
  }

  insertBefore(child: NodeWidget<any>) {
    this.insertChild(child);
  }

  getNextSibling(): NodeWidget<any> | null {
    // Scroll Area can only have one child
    return null;
  }
}
