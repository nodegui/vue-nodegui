import { QLineEdit, EchoMode } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps, viewPropsSetters } from '../View/VNView';

export interface LineEditProps extends ViewProps {
    text?: string;
    placeholderText?: string;
    readOnly?: boolean;
    echoMode?: EchoMode;
}

export const lineEditPropsSetters: PropSetters<VNLineEdit, LineEditProps> = {
  ...viewPropsSetters,
  text: (widget: VNLineEdit, _, nextValue: string) => {
    if (nextValue) {
      widget.setText(nextValue);
      return;
    }
    widget.clear();
  },
  placeholderText: (widget: VNLineEdit, _, nextValue: string) => {
    widget.setPlaceholderText(nextValue);
  },
  readOnly: (widget: VNLineEdit, _, nextValue: boolean) => {
    widget.setReadOnly(nextValue);
  },
  echoMode: (widget: VNLineEdit, _, nextValue: EchoMode) => {
    widget.setEchoMode(nextValue);
  },
};

export class VNLineEdit extends QLineEdit implements VNWidget<LineEditProps> {
  insertChild() {
    throw new Error('Cannot add child to line edits');
  }

  patchProp(
    key: keyof LineEditProps,
    prevValue: Prop<LineEditProps, typeof key>,
    nextValue: Prop<LineEditProps, typeof key>,
  ) {
    const propSetter = lineEditPropsSetters[key];
    if (propSetter !== undefined) { propSetter(this, prevValue as never, nextValue as never); }
  }

  removeChild() {
    throw new Error('Cannot remove/add child to line edits');
  }
}
