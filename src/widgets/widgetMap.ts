// import { VNButton } from './Button';
// import { VNView } from './View';
import TextConfig from './Text';
// import { VNTextInput } from './TextInput';
// import { VNImage } from './Image';

export type ValidWidgets = 'div' | 'p' | 'img' | 'input' | 'button';

type WidgetMap = {
  [key in ValidWidgets]: any
}

const widgetMap: WidgetMap = {
  div: undefined,
  p: new TextConfig(),
  img: undefined,
  input: undefined,
  button: undefined,
};

const getConfigByType = (type: ValidWidgets) => {
  if (widgetMap[type] === undefined) {
    throw new Error('invalid widget type');
  }
  return widgetMap[type];
};

export default getConfigByType;
