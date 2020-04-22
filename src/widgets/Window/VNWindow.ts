import { QMainWindow } from '@nodegui/nodegui';
import { HostNode } from '../../renderer/nodeOps';

export class VNWindow extends QMainWindow {
  insertChild(child: HostNode) {
    this.setCentralWidget(child);
  }
}
