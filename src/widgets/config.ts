import { NodeWidget, Component } from '@nodegui/nodegui';
import { Prop } from 'renderer/patchProp';

export abstract class VNNode<WidgetProps extends {}> {
    abstract insertChild(child: Component): void;

    abstract patchProp(
        key: keyof WidgetProps,
        prevValue: Prop<WidgetProps, typeof key>,
        nextValue: Prop<WidgetProps, typeof key>,
    ): void
}

export abstract class VNWidget<WidgetProps> extends NodeWidget<any> implements VNNode<WidgetProps> {
    abstract insertChild(child: NodeWidget<any>): void;

    abstract patchProp(
        key: keyof WidgetProps,
        prevValue: Prop<WidgetProps, typeof key>,
        nextValue: Prop<WidgetProps, typeof key>,
    ): void
}

export abstract class WidgetConfig<WidgetProps> {
    abstract createElement(): VNNode<WidgetProps>
}
