import { VNAnimatedImage, AnimatedImageProps } from './VNAnimatedImage';
import { WidgetConfig } from '../config';

class AnimatedImageConfig implements WidgetConfig<AnimatedImageProps> {
    parentNode: any;

    createElement() {
      return new VNAnimatedImage();
    }
}

export default AnimatedImageConfig;
