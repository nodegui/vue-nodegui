import { VNButton } from './Button';
import { VNView } from './View';
import { VNText } from './Text';
import { VNTextInput } from './TextInput';
import { VNImage } from './Image';

export type ValidWidgets = 'div' | 'p' | 'img' | 'input' | 'button';

type WidgetMap = {
  [key in ValidWidgets]: any
}

const widgetMap: WidgetMap = {
  div: new VNView(),
  p: new VNText(),
  img: new VNImage(),
  input: new VNTextInput(),
  button: new VNButton(),
};

const getConfigByType = (type: ValidWidgets) => {
  if (widgetMap[type] === undefined) {
    throw new Error('invalid widget type');
  }
  return widgetMap[type];
};

export default getConfigByType;
