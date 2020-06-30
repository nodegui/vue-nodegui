import { QLabel, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
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

export class VNText extends QLabel implements VNWidget<TextProps> {
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

  removeChild() {
    throw new Error('Cannot remove/add child to text elements');
  }

  insertBefore() {
    throw new Error('Cannot add child to text elements');
  }

  getNextSibling(): NodeWidget<any> | null {
    throw new Error('text elements cannot have children');
  }
}
