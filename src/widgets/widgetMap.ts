import ButtonConfig from './Button';
import ViewConfig from './View';
import TextConfig from './Text';
import LineEditConfig from './LineEdit';
import ImageConfig from './Image';
import { ValidNativeWidgets } from './nativeWidget';

type WidgetMap = {
  [key in ValidNativeWidgets]: any
}

const widgetMap: WidgetMap = {
  'vn-button': new ButtonConfig(),
  'vn-line-edit': new LineEditConfig(),
  'vn-image': new ImageConfig(),
  'vn-text': new TextConfig(),
  'vn-view': new ViewConfig(),
};

export const isNativeTag = (type: ValidNativeWidgets) => widgetMap[type] !== undefined;

const getConfigByType = (type: ValidNativeWidgets) => {
  if (!isNativeTag(type)) {
    throw new Error(`invalid widget type ${type}`);
  }
  return widgetMap[type];
};

export default getConfigByType;
