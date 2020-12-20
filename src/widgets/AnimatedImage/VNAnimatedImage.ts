import { QLabel, NodeWidget, QMovie } from '@nodegui/nodegui';
import { getLoadedQMovie } from '../../utils/image';
import { Prop, PropSetters } from '../../renderer/patchProp';
import { TextProps, textPropsSetters } from '../Text/VNText';
import { VNWidget } from '../config';

/**
 * The animated image widget allows users to create and render native GIFs, video (without controls)
 * elements in the app.
 * It is based on [NodeGui's QLabel](https://docs.nodegui.org/docs/api/generated/classes/qlabel) along with [NodeGui's QMovie](https://docs.nodegui.org/docs/api/generated/classes/qmovie)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *   <vn-animated-image :src="'https://i.giphy.com/media/oYtVHSxngR3lC/giphy.gif'" />
 *  </vn-view>
 * </template>
 *
 * <script>
 *  export default { }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![animated-image-demo](/img/vn-animated-image.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-animated-image` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface AnimatedImageProps extends TextProps {
    src?: string;
    buffer?: Buffer;
}

export const animatedImagePropsSetters: PropSetters<VNAnimatedImage, AnimatedImageProps> = {
  ...textPropsSetters,
  src: (widget: VNAnimatedImage, _, nextValue: string) => {
    if (!nextValue) {
      return;
    }
    getLoadedQMovie(nextValue)
      .then((movie) => {
        widget.setMovie(movie);
        widget.movie()?.start();
      })
      .catch(console.warn);
  },
  buffer: (widget: VNAnimatedImage, _, nextValue: Buffer) => {
    const movie = new QMovie();
    movie.loadFromData(nextValue);
    widget.setMovie(movie);
    widget.movie()?.start();
  },
};

/** @internal */
export class VNAnimatedImage extends QLabel implements VNWidget<AnimatedImageProps> {
  insertChild() {
    throw new Error('Cannot add child to animated image elements');
  }

  patchProp(
    key: keyof AnimatedImageProps,
    prevValue: Prop<AnimatedImageProps, typeof key>,
    nextValue: Prop<AnimatedImageProps, typeof key>,
  ) {
    const propSetter = animatedImagePropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  removeChild() {
    throw new Error('Cannot remove/add child to animated image elements');
  }

  insertBefore() {
    throw new Error('Cannot add child to animated image elements');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('animated image cannot have children');
  }
}
