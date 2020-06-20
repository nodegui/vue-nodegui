import { NodeWidget, Component } from '@nodegui/nodegui';
import { Prop } from 'renderer/patchProp';

export abstract class VNNode<WidgetProps extends {}> extends NodeWidget<any> {
    abstract insertChild(child: Component): void;

    abstract patchProp(
        key: keyof WidgetProps,
        prevValue: Prop<WidgetProps, keyof WidgetProps>,
        nextValue: Prop<WidgetProps, keyof WidgetProps>,
    ): void

    abstract removeChild(child: Component): void;

    abstract insertBefore(child: Component, beforeChild: Component): void;
}

export abstract class VNWidget<WidgetProps> extends NodeWidget<any> implements VNNode<WidgetProps> {
    abstract insertChild(child: NodeWidget<any>): void;

    abstract patchProp(
        key: keyof WidgetProps,
        prevValue: Prop<WidgetProps, keyof WidgetProps>,
        nextValue: Prop<WidgetProps, keyof WidgetProps>,
    ): void

    abstract removeChild(child: NodeWidget<any>): void;

    abstract insertBefore(
        child: NodeWidget<any>,
        beforeChild: NodeWidget<any>
    ): void;
}

export abstract class WidgetConfig<WidgetProps> {
    abstract createElement(): VNNode<WidgetProps>
}
