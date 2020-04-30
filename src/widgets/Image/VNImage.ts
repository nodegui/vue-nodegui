import {
  QLabel, QPixmap, AspectRatioMode, TransformationMode, QSize,
} from '@nodegui/nodegui';
import phin from 'phin';
import { Prop, PropSetters } from '../../renderer/patchProp';
import { isValidUrl } from '../../utils/url';
import { TextProps, textPropsSetters } from '../Text/VNText';

async function getLoadedPixmap(imageUrlOrPath: string): Promise<QPixmap> {
  const pixMap = new QPixmap();
  if (isValidUrl(imageUrlOrPath)) {
    const res = await phin(imageUrlOrPath);
    const imageBuffer = Buffer.from(res.body);
    pixMap.loadFromData(imageBuffer);
  } else {
    pixMap.load(imageUrlOrPath);
  }
  return pixMap;
}

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

export class VNImage extends QLabel {
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
      key: keyof TextProps,
      prevValue: Prop<TextProps, typeof key>,
      nextValue: Prop<TextProps, typeof key>,
    ) {
      const propSetter = textPropsSetters[key];
      if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
    }
}
