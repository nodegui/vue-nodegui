import {
  QLabel, QPixmap, AspectRatioMode, TransformationMode, QSize,
} from '@nodegui/nodegui';
import { getLoadedPixmap } from '../../utils/image';
import { Prop, PropSetters } from '../../renderer/patchProp';
import { TextProps, textPropsSetters } from '../Text/VNText';
import { VNWidget } from '../config';

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
}
