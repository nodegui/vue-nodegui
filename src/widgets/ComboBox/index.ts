import { WidgetConfig } from '../config';
import { VNComboBox, ComboBoxProps } from './VNComboBox';

class ComboBoxConfig implements WidgetConfig<ComboBoxProps> {
  parentNode: any;

  createElement() {
    return new VNComboBox();
  }
}

export default ComboBoxConfig;
