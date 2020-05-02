import { QLabel } from '@nodegui/nodegui';
import { VNNode } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps, viewPropsSetters } from '../View/VNView';

export interface TextProps extends ViewProps {
  wordWrap?: boolean;
  scaledContents?: boolean;
  openExternalLinks?: boolean;
}

export const textPropsSetters: PropSetters<VNText, TextProps> = {
  ...viewPropsSetters,
  wordWrap(widget: VNText, _, nextValue: boolean) {
    widget.setWordWrap(nextValue);
  },
  scaledContents(widget: VNText, _, nextValue: boolean) {
    widget.setProperty('scaledContents', nextValue);
  },
  openExternalLinks(widget: VNText, _, nextValue: boolean) {
    widget.setProperty('openExternalLinks', nextValue);
  },
};

export class VNText extends QLabel implements VNNode<TextProps> {
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
