import { RendererOptions } from '@vue/runtime-core';

const patchProp: RendererOptions['patchProp'] = (
  el,
  key,
  nextValue,
  prevValue,
  // isSVG = false,
  // prevChildren,
  // parentComponent,
  // parentSuspense,
  // unmountChildren,
) => {
  if (!prevValue) {
    console.log('adding press listener');
    el.addEventListener('pressed', nextValue);
  }
};

export default patchProp;
