import { WidgetConfig } from '../config';
import { VNSpinBox, SpinBoxProps } from './VNSpinBox';

class SpinBoxConfig implements WidgetConfig<SpinBoxProps> {
  parentNode: any;

  createElement() {
    return new VNSpinBox();
  }
}

export default SpinBoxConfig;
