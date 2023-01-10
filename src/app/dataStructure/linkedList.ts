export type NodeType = {
  key: string;
  value: number;
};
export interface ListNode {
  data: NodeType;
  next: ListNode | null;
}

export class LLNode implements ListNode {
  public data;
  public next;
  constructor(data: NodeType, next: ListNode | null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  head: ListNode | null = null;
  tail: ListNode | null = null;
  insertAtTop(data: NodeType) {
    if (this.head == null) {
      this.head = new LLNode(data, null);
      this.tail = this.head;
    } else {
      const newNode = new LLNode(data, this.head);
      this.head = newNode;
    }
  }
  insertAtTail(data: NodeType) {
    if (this.tail === null) {
      this.insertAtTop(data);
    } else {
      const newNode = new LLNode(data, null);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  findByKey(key: string) {
    let node = this.head;
    while (node != null) {
      if (node.data.key === key) {
        return node;
      }
      node = node.next;
    }
    return null;
  }
  print() {
    let node = this.head;
    let listring = '';
    while (node != null) {
      listring += '-->' + node.data.key + '|' + String(node.data.value);
      node = node.next;
    }
    listring += '--> None';
    return listring;
  }
}
