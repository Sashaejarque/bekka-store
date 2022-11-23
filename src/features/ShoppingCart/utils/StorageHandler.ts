export class StorageHandler {
  key: string;
  storage: any;

  constructor(key: string /*  storage: any */) {
    this.key = key;
    /* this.storage = storage; */
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
