import { VNRadioButton, RadioButtonProps } from './VNRadioButton';
import { WidgetConfig } from '../config';

class RadioButtonConfig implements WidgetConfig<RadioButtonProps> {
    parentNode: any;

    createElement() {
      return new VNRadioButton();
    }
}

export default RadioButtonConfig;
