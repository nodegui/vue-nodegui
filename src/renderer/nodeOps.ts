import { RendererOptions } from '@vue/runtime-core';
import patchProp from './patchProp';

const nodeOps: RendererOptions = {
  insert: () => {},
  remove: () => {},
  createElement: () => {},
  createText: () => {},
  createComment: () => {},
  setText: () => {},
  setElementText: () => {},
  parentNode: () => {},
  nextSibling: () => {},
  patchProp,
};

export default nodeOps;
