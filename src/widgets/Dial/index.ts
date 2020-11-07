import { WidgetConfig } from '../config';
import { VNDial, DialProps } from './VNDial';

class DialConfig implements WidgetConfig<DialProps> {
  parentNode: any;

  createElement() {
    return new VNDial();
  }
}

export default DialConfig;
