import { RendererOptions } from '@vue/runtime-core';
import { VNNode, VNWidget } from 'widgets/config';
import { VNText } from 'widgets/Text/VNText';
import { VNButton } from 'widgets/Button/VNButton';
import { VNMetaWidget } from '../widgets/MetaWidget/VNMetaWidget';
import { ValidNativeWidgets } from '../widgets/nativeWidget';
import getConfigByType from '../widgets/widgetMap';
import patchProp from './patchProp';

const nodeOps: RendererOptions<VNWidget<any>, VNNode<any>> = {
  insert: (child: VNWidget<any>, parent: VNNode<any>, anchor) => {
    // TODO: implement insertBefore in widgets
    if (anchor) {
      parent.insertBefore(child, anchor);
    } else {
      parent.insertChild(child as VNWidget<any>);
    }
    (child as VNWidget<any>).setNodeParent(parent);
  },
  remove: (child: VNWidget<any>) => {
    const { nodeParent } = child;
    if (nodeParent) {
      (nodeParent as VNNode<any>).removeChild(child);
    }
  },
  createElement: (type: ValidNativeWidgets) => {
    const config = getConfigByType(type);
    return config.createElement();
  },
  createText: () => new VNMetaWidget(),
  createComment: () => new VNMetaWidget(),
  setText: (node: VNText | VNButton, text: string) => {
    node.setText(text);
  },
  setElementText: (node: VNText | VNButton, text: string) => {
    node.setText(text);
  },
  parentNode: (node: VNWidget<any>) => {
    if (node) {
      return node.nodeParent as VNNode<any>;
    }
    return null;
  },
  nextSibling: () => null,
  patchProp,
};

export default nodeOps;
