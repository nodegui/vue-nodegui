export type ValidNativeWidgets = 'vn-image' | 'vn-text' | 'vn-view' | 'vn-line-edit' | 'vn-button';

// Add vue-nodegui widgets here
// whenever new ones are created
const nativeWidgets: {[key in ValidNativeWidgets]: boolean} = {
  'vn-text': true,
  'vn-view': true,
  'vn-button': true,
  'vn-image': true,
  'vn-line-edit': true,
};

export const isNativeWidget = (type: ValidNativeWidgets) => !!nativeWidgets[type];
