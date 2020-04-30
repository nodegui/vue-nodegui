import { WidgetEventTypes } from '@nodegui/nodegui';
import { VNImage } from './VNImage';

class ImageConfig {
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
