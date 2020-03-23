import { RendererOptions } from '@vue/runtime-core';
import { QLabel } from '@nodegui/nodegui';
import patchProp from './patchProp';

type HostNode = any;
type HostElement = any;

const nodeOps: RendererOptions<HostNode, HostElement> = {
  insert: (el: HostNode, parent: HostElement) => {
    parent.setCentralWidget(el);
  },
  remove: (child: HostNode) => {
    console.log('remove', child);
  },
  createElement: (type: string) => {
    console.log(type);
    return new QLabel();
  },
  createText: (text: string) => {
    console.log('create text: ', text);
  },
  createComment: (text: string) => {
    console.log('create comment: ', text);
  },
  setText: (node: HostNode, text: string) => {
    node.setText(text);
  },
  setElementText: (node: HostElement, text: string) => {
    node.setText(text);
  },
  parentNode: (node: HostNode) => {
    console.log('parent node: ', node);
  },
  nextSibling: (node: HostNode) => {
    console.log('next sibling: ', node);
  },
  patchProp,
};

export default nodeOps;
