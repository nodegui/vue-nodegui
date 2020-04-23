import { VNView } from './VNView';

class ViewConfig {
    parentNode: any;

    createElement() {
      return new VNView();
    }
}

export default ViewConfig;
