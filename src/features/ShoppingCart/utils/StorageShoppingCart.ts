export class StorageShoppingCart {
  key: string;

  constructor(key: string) {
    this.key = key;
  }

  getData() {
    const storage = window.localStorage.getItem(this.key);
    if (storage) {
      return JSON.parse(storage);
    }
    return [];
  }

  setData(data: any) {
    const items = JSON.stringify(data);
    return window.localStorage.setItem(this.key, items);
  }
}
