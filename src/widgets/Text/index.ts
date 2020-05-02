import { WidgetConfig } from 'widgets/config';
import { VNText, TextProps } from './VNText';

class TextConfig implements WidgetConfig<TextProps> {
    parentNode: any;

    createElement() {
      return new VNText();
    }
}

export default TextConfig;
