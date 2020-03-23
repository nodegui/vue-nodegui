import { createRenderer, CreateAppFunction } from '@vue/runtime-core';
import { QMainWindow } from '@nodegui/nodegui';
import rendererOptions from './nodeOps';

const renderer = createRenderer(rendererOptions);

export const createApp: CreateAppFunction<any> = (...args) => {
  const app = renderer.createApp(...args);

  const { mount } = app;
  app.mount = () => {
    const container = new QMainWindow();
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
