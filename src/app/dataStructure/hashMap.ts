import { LinkedList } from './linkedList';

export class HashTable {
  private _hashTable: Record<string, LinkedList> = {};
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
  public addKeyValue = ({ key, value }: { key: string; value: number }) => {
    const keyHash = this._customHash(key);
    if (!this._hashTable[keyHash]) {
      this._hashTable[keyHash] = new LinkedList();
    }
    this._hashTable[keyHash].insertAtTail({ key, value });
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
