import { VNText } from './VNText';

class TextConfig {
    parentNode: any;

    createElement() {
      return new VNText();
    }
}

export default TextConfig;
