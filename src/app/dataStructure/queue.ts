export class Queue<T> {
  list: T[] = [];
  constructor() {}
  enQueue(item: T) {
    this.list.push(item);
  }
  length(): number {
    return this.list.length;
  }
  deQueue(): T {
    let [firstNode, ...remainingNodes] = this.list;
    this.list = remainingNodes;
    return firstNode;
  }
}
