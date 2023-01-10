import { LinkedList, KeyWise } from './linkedList';

export class HashTable<NodeType extends KeyWise> {
  private _hashTable: Record<string, LinkedList<NodeType>> = {};
  private _customHash = (hashKey: string) => {
    return (
      hashKey
        .split('')
        .reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue.charCodeAt(0),
          0
        ) % this._tableSize
    );
  };
  public addKeyValue = (inputNode: NodeType) => {
    const keyHash = this._customHash(inputNode.key);
    if (!this._hashTable[keyHash]) {
      this._hashTable[keyHash] = new LinkedList<NodeType>();
    }
    this._hashTable[keyHash].insertAtTail(inputNode);
  };
  public getKeyValue = (key: string) => {
    const keyHash = this._customHash(key);
    if (!this._hashTable[keyHash]) {
      return null;
    }
    return this._hashTable[keyHash].findByKey(key);
  };
  public print = () => {
    return JSON.stringify(this._hashTable);
  };
  constructor(private _tableSize: number = 10) {}
}
