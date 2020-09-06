import {
  QIcon, QSize, QAbstractButtonSignals, QAbstractButton,
} from '@nodegui/nodegui';
import { ViewProps, viewPropsSetters } from 'widgets/View/VNView';
import { PropSetters } from 'renderer/patchProp';

/** @internal */
export interface AbstractButtonProps extends ViewProps {
  /**
   * Sets the given text to the button (Used as an alternative to children). [QPushButton: setText](https://docs.nodegui.org/docs/api/QPushButton#buttonsettexttext)
   */
  text?: string;
  /**
   * Sets an icon in the button. [QPushButton: setIcon](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonicon)
   */
  icon?: QIcon;
  /**
   * Sets an icon size in the button. [QPushButton: setIconSize](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonsize)
   */
  iconSize?: QSize;
}

export const abstractButtonPropSetters: PropSetters<
    QAbstractButton<QAbstractButtonSignals>,
AbstractButtonProps> = {
  ...viewPropsSetters,
  text: (widget: QAbstractButton<QAbstractButtonSignals>, _, nextValue: string) => {
    widget.setText(nextValue);
  },
  icon: (widget: QAbstractButton<QAbstractButtonSignals>, _, nextValue: QIcon) => {
    widget.setIcon(nextValue);
  },
  iconSize: (widget: QAbstractButton<QAbstractButtonSignals>, _, nextValue: QSize) => {
    widget.setIconSize(nextValue);
  },
};
