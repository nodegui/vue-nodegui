import { createRenderer, CreateAppFunction, App } from '@vue/runtime-core';
import { isNativeWidget } from '../widgets/nativeWidget';
import { VNWindow } from '../widgets/Window/VNWindow';
import rendererOptions from './nodeOps';

const renderer = createRenderer(rendererOptions);

function injectNativeTagCheck(app: App) {
  // Inject `isNativeTag`
  // this is used for component name validation (dev only)
  Object.defineProperty(app.config, 'isNativeTag', {
    value: isNativeWidget,
    writable: false,
  });
}

export const createApp: CreateAppFunction<any> = (...args) => {
  const app = renderer.createApp(...args);

  injectNativeTagCheck(app);

  const { mount } = app;
  app.mount = () => {
    const container = new VNWindow();
    container.show();
    // Need the next line
    // to prevent the window
    // object from being GC'ed
    // @ts-ignore
    global.win = container;
    return mount(container);
  };

  return app;
};
