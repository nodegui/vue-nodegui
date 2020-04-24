import { QPushButton } from '@nodegui/nodegui';

export class VNButton extends QPushButton {
  insertChild() {
    throw new Error('Cannot add child to buttons');
  }

  patchProp() {

  }
}
