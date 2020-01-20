const asyncMap = require('../index')

describe('Async map', () => {
  it('should map a regular array', async () => {
    const original = [1,2,3,4,5,6];
    const double = number => number * 2;
    expect(await asyncMap(original, double))
      .toEqual(original.map(double));
  });

  it('should map an array with some async callbacks', async () => {
    const original = [1,2,3,4,5,6];
    const double = async number => {
      await new Promise(resolve => setTimeout(resolve, 10));
      return number * 2;
    };
    expect(await asyncMap(original, double))
      .toEqual([2,4,6,8,10,12]);
  });

  it('should pass indexes to the callback', async () => {
    const array = ['a', 'b', 'c'];
    const indexer = async (element, index) => {
      await new Promise(resolve => setTimeout(resolve, 10));
      return index;
    };
    expect(await asyncMap(array, indexer)).toEqual([0, 1, 2]);

  })
});