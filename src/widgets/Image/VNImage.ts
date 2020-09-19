import {
  QLabel, QPixmap, AspectRatioMode, TransformationMode, QSize, NodeWidget,
} from '@nodegui/nodegui';
import { getLoadedPixmap } from '../../utils/image';
import { Prop, PropSetters } from '../../renderer/patchProp';
import { TextProps, textPropsSetters } from '../Text/VNText';
import { VNWidget } from '../config';

/**
 * The image widget allows users to create and render native image elements in the app.
 * It is based on [NodeGui's QLabel](https://docs.nodegui.org/docs/api/generated/classes/qlabel) along with [NodeGui's QPixmap](https://docs.nodegui.org/docs/api/generated/classes/qpixmap)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view><vn-image :src="'https://via.placeholder.com/150'" /></vn-view>
 * </template>
 *
 * <script>
 *  export default { }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![image-demo](/img/vn-image.png)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-image` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface ImageProps extends TextProps {
    src?: string;
    aspectRatioMode?: AspectRatioMode;
    transformationMode?: TransformationMode;
    buffer?: Buffer;
}

export const imagePropsSetters: PropSetters<VNImage, ImageProps> = {
  ...textPropsSetters,
  src: (widget: VNImage, _, nextValue: string) => {
    if (!nextValue) {
      return;
    }
    getLoadedPixmap(nextValue)
      .then((pixmap) => widget.setPixmap(pixmap))
      .catch(console.warn);
  },
  buffer: (widget: VNImage, _, nextValue: Buffer) => {
    const pixMap = new QPixmap();
    pixMap.loadFromData(nextValue);
    widget.setPixmap(pixMap);
  },
  aspectRatioMode: (widget: VNImage, _, nextValue: AspectRatioMode) => {
    widget.setAspectRatioMode(nextValue);
  },
  transformationMode: (widget: VNImage, _, nextValue: TransformationMode) => {
    widget.setTransformationMode(nextValue);
  },
};

/** @internal */
export class VNImage extends QLabel implements VNWidget<ImageProps> {
    originalPixmap?: QPixmap;

    aspectRatioMode?: AspectRatioMode;

    transformationMode?: TransformationMode;

    setPixmap = (pixmap: QPixmap) => {
      super.setPixmap(pixmap);
      this.originalPixmap = pixmap;
    };

    setAspectRatioMode(mode: AspectRatioMode) {
      this.aspectRatioMode = mode;
      this.scalePixmap(this.size());
    }

    setTransformationMode(mode: TransformationMode) {
      this.transformationMode = mode;
      this.scalePixmap(this.size());
    }

    scalePixmap(size: QSize) {
      if (!this.originalPixmap) return;
      super.setPixmap(
        this.originalPixmap.scaled(
          size.width(),
          size.height(),
          this.aspectRatioMode,
          this.transformationMode,
        ),
      );
    }

    insertChild() {
      throw new Error('Cannot add child to image elements');
    }

    patchProp(
      key: keyof ImageProps,
      prevValue: Prop<ImageProps, typeof key>,
      nextValue: Prop<ImageProps, typeof key>,
    ) {
      const propSetter = imagePropsSetters[key];
      if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
    }

    removeChild() {
      throw new Error('Cannot remove/add child to image elements');
    }

    insertBefore() {
      throw new Error('Cannot add child to image elements');
    }

    getNextSibling(): NodeWidget<any> | null {
      throw new Error('image cannot have children');
    }
}
