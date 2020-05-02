import { VNButton, ButtonProps } from './VNButton';
import { WidgetConfig } from '../config';

class ButtonConfig implements WidgetConfig<ButtonProps> {
    parentNode: any;

    createElement() {
      return new VNButton();
    }
}

export default ButtonConfig;
