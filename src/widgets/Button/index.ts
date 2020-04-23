import { VNButton } from './VNButton';

class ButtonConfig {
    parentNode: any;

    createElement() {
      return new VNButton();
    }
}

export default ButtonConfig;
