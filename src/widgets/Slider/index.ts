import { VNSlider, SliderProps } from './VNSlider';
import { WidgetConfig } from '../config';

class SliderConfig implements WidgetConfig<SliderProps> {
    parentNode: any;

    createElement() {
      return new VNSlider();
    }
}

export default SliderConfig;
