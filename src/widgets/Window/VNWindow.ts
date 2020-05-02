import { QMainWindow } from '@nodegui/nodegui';
import { VNNode } from 'widgets/config';
import { HostNode } from '../../renderer/nodeOps';

export class VNWindow extends QMainWindow implements VNNode<{}> {
  insertChild(child: HostNode) {
    this.setCentralWidget(child);
  }

  // TODO: window widget not implemented yet
  patchProp() {}
}
