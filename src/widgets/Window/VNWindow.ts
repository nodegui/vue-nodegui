import { QMainWindow, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';

export class VNWindow extends QMainWindow implements VNWidget<{}> {
  insertChild(child: NodeWidget<any>) {
    this.setCentralWidget(child);
  }

  // TODO: window widget not implemented yet
  patchProp() {}
}
