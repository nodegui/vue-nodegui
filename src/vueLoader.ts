import { transformModel as baseTransform, registerRuntimeHelpers, DirectiveTransform } from '@vue/compiler-core';
import { isNativeWidget } from './widgets/nativeWidget';

const V_MODEL_TEXT = Symbol('vModelText');

registerRuntimeHelpers({
  [V_MODEL_TEXT]: 'vModelText',
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
      if (tag === 'vn-line-edit') {
        directiveToUse = V_MODEL_TEXT;
      } else {
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
