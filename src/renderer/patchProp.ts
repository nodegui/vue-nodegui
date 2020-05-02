import { RendererOptions } from '@vue/runtime-core';
import { NodeWidget, NativeElement } from '@nodegui/nodegui';
import { VNWidget, VNNode } from 'widgets/config';

export type Prop<T, key extends keyof T> = Required<T>[key];

export type PropSetters<W extends NodeWidget<any>, T extends {}> = {
  [key in keyof Required<T>]: (
    widget: W,
    prevValue: Prop<T, key>,
    nextValue: Prop<T, key>
  ) => void
}

export type EventHandler = (native?: NativeElement) => void;

export const patchEvent = (
  eventType: string,
  widget: NodeWidget<any>,
  prevValue: EventHandler,
  nextValue: EventHandler,
) => {
  const camelCaseEvent = eventType[0].toLowerCase() + eventType.slice(1);
  if (prevValue !== nextValue) {
    widget.removeEventListener(camelCaseEvent, prevValue);
    widget.addEventListener(camelCaseEvent, nextValue);
  }
};

const patchProp: RendererOptions<VNWidget<any> | void, VNNode<any>>['patchProp'] = (
  el: VNWidget<any>,
  key,
  prevValue,
  nextValue,
  // isSVG = false,
  // prevChildren,
  // parentComponent,
  // parentSuspense,
  // unmountChildren,
) => {
  const isEvent = key[0] === 'o' && key[1] === 'n'; // This is more efficient than slicing. Don't change
  if (isEvent) {
    patchEvent(key.slice(2), el, prevValue, nextValue);
    return;
  }
  el.patchProp(key, prevValue, nextValue);
};

export default patchProp;
