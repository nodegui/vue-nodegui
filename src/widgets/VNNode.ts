import { HostNode } from '../renderer/nodeOps';

export abstract class VNNode {
    abstract insertChild(child: HostNode): void;

    abstract createElement(): void
}
