export interface KeyWise {
  key: string;
}
export interface ListNode<InputType> {
  data: InputType;
  next: ListNode<InputType> | null;
}
export class LLNode<InputType> implements ListNode<InputType> {
  public data;
  public next;
  constructor(data: InputType, next: ListNode<InputType> | null) {
    this.data = data;
    this.next = next;
  }
}
export class LinkedList<InputType extends KeyWise> {
  head: ListNode<InputType> | null = null;
  tail: ListNode<InputType> | null = null;
  insertAtTop(data: InputType) {
    if (this.head == null) {
      this.head = new LLNode<InputType>(data, null);
      this.tail = this.head;
    } else {
      const newNode = new LLNode(data, this.head);
      this.head = newNode;
    }
  }
  insertAtTail(data: InputType) {
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
      listring += '-->' + node.data.key;
      node = node.next;
    }
    listring += '--> None';
    return listring;
  }
}
