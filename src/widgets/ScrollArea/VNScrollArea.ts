import { QScrollArea, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps, viewPropsSetters } from '../View/VNView';

/**
 * The scroll-area widget allows users to wrap other widgets to enable a scroll
 * (horizontal and vertical).
 * It is based on [NodeGui's QScrollArea](https://docs.nodegui.org/docs/api/generated/classes/qscrollarea)
 *
 * > Note that the scroll area only allows one child. So, you may have to wrap contents in a vn-view
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-scroll-area>
 *    <vn-view :style="'flex-direction: \'column\''">
 *      <vn-text>Hello world</vn-text>
 *      <vn-text :wordWrap="true">
 *        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *        Donec sapien orci, mattis sed lectus in, congue commodo odio.
 *        Pellentesque luctus vestibulum justo eu porta.
 *        Vivamus porttitor leo vitae tellus fringilla viverra.
 *        Ut quis nunc id nisi vehicula posuere.
 *        Suspendisse sem sem, fringilla ac lacinia et, rutrum et ipsum.
 *        Curabitur porttitor justo sapien, et scelerisque erat sollicitudin a.
 *        In id quam lectus. Vestibulum sed nunc tempus leo dapibus scelerisque vel ut ligula.
 *        Aliquam tempor iaculis arcu non interdum.
 *      </vn-text>
 *    </vn-view>
 *  </vn-scroll-area>
 * </template>
 *
 * <script>
 *  export default { };
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![scroll-area-demo](/img/vn-scroll-area.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-scroll-area` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
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
