import { ScrollAreaProps, VNScrollArea } from './VNScrollArea';
import { WidgetConfig } from '../config';

class ScrollAreaConfig implements WidgetConfig<ScrollAreaProps> {
    parentNode: any;

    createElement() {
      return new VNScrollArea();
    }
}

export default ScrollAreaConfig;
