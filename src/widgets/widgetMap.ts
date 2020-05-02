import ButtonConfig from './Button';
import ViewConfig from './View';
import TextConfig from './Text';
import LineEditConfig from './LineEdit';
import ImageConfig from './Image';
import { ValidNativeWidgets } from './nativeWidget';
import { WidgetConfig } from './config';

type WidgetMap = {
  [key in ValidNativeWidgets]: WidgetConfig<any>
}

const widgetMap: WidgetMap = {
  'vn-button': new ButtonConfig(),
  'vn-line-edit': new LineEditConfig(),
  'vn-image': new ImageConfig(),
  'vn-text': new TextConfig(),
  'vn-view': new ViewConfig(),
};

const getConfigByType = (type: ValidNativeWidgets) => {
  if (widgetMap[type] === undefined) {
    throw new Error(`invalid widget type ${type}`);
  }
  return widgetMap[type];
};

export default getConfigByType;
