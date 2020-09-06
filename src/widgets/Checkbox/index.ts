import { VNCheckbox, CheckboxProps } from './VNCheckbox';
import { WidgetConfig } from '../config';

class CheckboxConfig implements WidgetConfig<CheckboxProps> {
    parentNode: any;

    createElement() {
      return new VNCheckbox();
    }
}

export default CheckboxConfig;
