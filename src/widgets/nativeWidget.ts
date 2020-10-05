export type ValidNativeWidgets = 'vn-image' |
'vn-text' |
'vn-view' |
'vn-line-edit' |
'vn-button' |
'vn-checkbox' |
'vn-radio-button' |
'vn-scroll-area' |
'vn-slider' |
'vn-spinbox' |
'vn-progress-bar';

// Add vue-nodegui widgets here
// whenever new ones are created
const nativeWidgets: {[key in ValidNativeWidgets]: boolean} = {
  'vn-text': true,
  'vn-view': true,
  'vn-button': true,
  'vn-image': true,
  'vn-line-edit': true,
  'vn-checkbox': true,
  'vn-radio-button': true,
  'vn-scroll-area': true,
  'vn-slider': true,
  'vn-spinbox': true,
  'vn-progress-bar': true,
};

export const isNativeWidget = (type: ValidNativeWidgets) => !!nativeWidgets[type];
