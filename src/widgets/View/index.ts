import { WidgetConfig } from 'widgets/config';
import { VNView, ViewProps } from './VNView';

class ViewConfig implements WidgetConfig<ViewProps> {
    parentNode: any;

    createElement() {
      return new VNView();
    }
}

export default ViewConfig;
