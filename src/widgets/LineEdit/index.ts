import { WidgetConfig } from 'widgets/config';
import { VNLineEdit, LineEditProps } from './VNLineEdit';

class LineEditConfig implements WidgetConfig<LineEditProps> {
    parentNode: any;

    createElement() {
      return new VNLineEdit();
    }
}

export default LineEditConfig;
