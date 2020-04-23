import { QWidget, FlexLayout, NodeWidget } from '@nodegui/nodegui';

export class VNView extends QWidget {
  insertChild(child: NodeWidget<any>) {
    if (!child) {
      return;
    }
    if (!this.layout) {
      const flexLayout = new FlexLayout();
      flexLayout.setFlexNode(this.getFlexNode());
      this.setLayout(flexLayout);
      this.layout = flexLayout;
    }
    this.layout.addWidget(child);
  }
}
