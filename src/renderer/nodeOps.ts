import { RendererOptions } from '@vue/runtime-core';
import { VNNode, VNWidget } from 'widgets/config';
import { VNText } from 'widgets/Text/VNText';
import { VNButton } from 'widgets/Button/VNButton';
import { ValidNativeWidgets } from '../widgets/nativeWidget';
import getConfigByType from '../widgets/widgetMap';
import patchProp from './patchProp';

const nodeOps: RendererOptions<VNWidget<any> | void, VNNode<any>> = {
  insert: (child: VNWidget<any> | void, parent: VNNode<any>) => {
    parent.insertChild(child as VNWidget<any>);
  },
  remove: (child: VNWidget<any> | void) => {
    console.log('remove', child);
  },
  createElement: (type: ValidNativeWidgets) => {
    const config = getConfigByType(type);
    // TODO: implement createElement on each of the types
    // @ts-ignore
    return config.createElement();
  },
  createText: (text: string) => {
    console.log('create text: ', text);
    // create a VNText maybe (?)
  },
  createComment: (text: string) => {
    console.log('create comment: ', text);
    // Maybe don't implement this yet
  },
  setText: (node: VNText | VNButton, text: string) => {
    node.setText(text);
  },
  setElementText: (node: VNText | VNButton, text: string) => {
    node.setText(text);
  },
  parentNode: (node: VNWidget<any> | void) => {
    console.log('parent node: ', node);
    // implement this later (?)
    return null;
  },
  nextSibling: (node: VNWidget<any> | void) => {
    console.log('next sibling: ', node);
    // implement this later (?)
  },
  patchProp,
};

export default nodeOps;
