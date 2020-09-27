import { transformModel as baseTransform, registerRuntimeHelpers, DirectiveTransform } from '@vue/compiler-core';
import { isNativeWidget } from './widgets/nativeWidget';

const V_MODEL_TEXT = Symbol('vModelText');
const V_MODEL_SLIDER = Symbol('vModelSlider');

registerRuntimeHelpers({
  [V_MODEL_TEXT]: 'vModelText',
  [V_MODEL_SLIDER]: 'vModelSlider',
});

type CompilerOptions = {
    isNativeTag: Function,
    directiveTransforms: {
        [key in string]: DirectiveTransform
    }
}

export const compilerOptions: CompilerOptions = {
  isNativeTag: isNativeWidget,
  directiveTransforms: {
    model: (dir, node, context) => {
      const baseResult = baseTransform(dir, node, context);
      const { tag } = node;
      let directiveToUse;
      switch (tag) {
        case 'vn-line-edit':
          directiveToUse = V_MODEL_TEXT;
          break;
        case 'vn-slider':
          directiveToUse = V_MODEL_SLIDER;
          break;
        default:
          throw new Error(`cannot use v-model on tag: ${tag}`);
      }
      baseResult.needRuntime = context.helper(directiveToUse as symbol);
      // console.log('dir', dir);
      // console.log('node', node);
      // console.log('context', context);
      return baseResult;
    },
  },
};
