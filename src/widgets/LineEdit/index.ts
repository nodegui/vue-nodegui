import { VNLineEdit } from './VNLineEdit';

class LineEditConfig {
    parentNode: any;

    createElement() {
      return new VNLineEdit();
    }
}

export default LineEditConfig;
