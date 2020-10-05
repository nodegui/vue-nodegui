import { WidgetConfig } from '../config';
import { VNProgressBar, ProgressBarProps } from './VNProgressBar';

class ProgressBarConfig implements WidgetConfig<ProgressBarProps> {
  parentNode: any;

  createElement() {
    return new VNProgressBar();
  }
}

export default ProgressBarConfig;
