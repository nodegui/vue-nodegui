import { QLabel } from '@nodegui/nodegui';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps, viewPropsSetters } from '../View/VNView';

export interface TextProps extends ViewProps {

}


export const textPropsSetters: PropSetters<VNText, TextProps> = {
  ...viewPropsSetters,
};

export class VNText extends QLabel {
  insertChild() {
    throw new Error('Cannot add child to text elements');
  }

  patchProp(
    key: keyof TextProps,
    prevValue: Prop<TextProps, typeof key>,
    nextValue: Prop<TextProps, typeof key>,
  ) {
    const propSetter = textPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }
}
