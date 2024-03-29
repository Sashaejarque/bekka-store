import { expect, it, describe } from '@jest/globals';
import { StorageShoppingCart } from '../utils/StorageShoppingCart';

describe('StorageShoppingCart', () => {
  it('getData and setData should be a function', () => {
    const storage = new StorageShoppingCart('test');
    expect(storage.getData).toBeInstanceOf(Function);
    expect(storage.setData).toBeInstanceOf(Function);
  });

  it('should return an empty array', () => {
    const storage = new StorageShoppingCart('test');
    expect(storage.getData()).toEqual([]);
  });
});
