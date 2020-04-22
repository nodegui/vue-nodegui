import { createRenderer, CreateAppFunction } from '@vue/runtime-core';
import { VNWindow } from '../widgets/Window/VNWindow';
import rendererOptions from './nodeOps';

const renderer = createRenderer(rendererOptions);

export const createApp: CreateAppFunction<any> = (...args) => {
  const app = renderer.createApp(...args);

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
