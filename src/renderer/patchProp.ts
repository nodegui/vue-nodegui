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
  // TODO: handle prop additions in individual widgets
  if (!prevValue) {
    el.addEventListener('pressed', nextValue);
  }
};

export default patchProp;
