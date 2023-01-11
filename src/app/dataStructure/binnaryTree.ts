import { Queue } from './queue';

export class TreeNode {
  value: number | null;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(
    value: number | null,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export class BinnaryTree {
  head: TreeNode | null = null;
  growTree(nodes: Array<number | null>, index: number = 0): TreeNode | null {
    let root = null;
    if (index < nodes.length) {
      root = new TreeNode(nodes[index]);
      root.left = this.growTree(nodes, index * 2 + 1);
      root.right = this.growTree(nodes, index * 2 + 2);
    }
    return root;
  }
  printTree(): Array<number | null>[] {
    if (this.head == null) {
      return [];
    }
    let treeArray: Array<number | null>[] = [];
    let treeQueue = new Queue();
    treeQueue.enQueue(this.head);
    while (treeQueue.length()) {
      let levelArray: Array<number | null> = [];
      let queueLength = treeQueue.length();
      for (let i = 0; i < queueLength; i++) {
        let node = treeQueue.deQueue() as TreeNode;
        levelArray.push(node.value);
        if (node.left) {
          treeQueue.enQueue(node.left);
        }
        if (node.right) {
          treeQueue.enQueue(node.right);
        }
      }
      treeArray.push(levelArray);
    }
    return treeArray;
  }
  constructor(nodes: Array<number | null>) {
    this.head = this.growTree(nodes);
  }
}
