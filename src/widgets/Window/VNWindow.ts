import { QMainWindow, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';

/**
 * The main QMainWindow that contains the entire application.
 *
 * :::note
 * This widget can have only one child (the central widget)
 * :::
 *
 * Usage:
 *
 * You would not be using this widget in your app.
 * vue-nodegui automatically wraps you central widget into the vn-window widget
 * to allow you to open the app in your browser
 * @internal
 */
export class VNWindow extends QMainWindow implements VNWidget<{}> {
  insertChild(child: NodeWidget<any>) {
    this.setCentralWidget(child);
  }

  patchProp() {}

  removeChild(child: NodeWidget<any>) {
    const removedChild = this.takeCentralWidget();
    if (removedChild) {
      removedChild.close();
    }
    child.close();
  }

  insertBefore(child: NodeWidget<any>) {
    if (!this.centralWidget) {
      this.insertChild(child);
    }
  }

  getNextSibling(): null {
    // window can only have a single central widget
    return null;
  }
}
