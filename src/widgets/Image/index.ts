import { WidgetEventTypes } from '@nodegui/nodegui';
import { WidgetConfig } from '../config';
import { VNImage, ImageProps } from './VNImage';

class ImageConfig implements WidgetConfig<ImageProps> {
    parentNode: any;

    createElement() {
      const widget = new VNImage();
      widget.addEventListener(WidgetEventTypes.Resize, () => {
        widget.scalePixmap(widget.size());
      });
      return widget;
    }
}

export default ImageConfig;
