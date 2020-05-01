import { RendererOptions } from '@vue/runtime-core';
import { ValidNativeWidgets } from '../widgets/nativeWidget';
import getConfigByType from '../widgets/widgetMap';
import patchProp from './patchProp';

// TODO: create the hostNode and hostElement types
export type HostNode = any;
export type HostElement = any;

const nodeOps: RendererOptions<HostNode, HostElement> = {
  insert: (child: HostNode, parent: HostElement) => {
    parent.insertChild(child);
  },
  remove: (child: HostNode) => {
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
  setText: (node: HostNode, text: string) => {
    // TODO: implement setText on each of the types
    node.setText(text);
  },
  setElementText: (node: HostElement, text: string) => {
    // TODO: implement setText on each of the types
    node.setText(text);
  },
  parentNode: (node: HostNode) => {
    console.log('parent node: ', node);
    // implement this later (?)
  },
  nextSibling: (node: HostNode) => {
    console.log('next sibling: ', node);
    // implement this later (?)
  },
  patchProp,
};

export default nodeOps;
