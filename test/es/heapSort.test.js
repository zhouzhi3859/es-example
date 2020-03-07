/**
 * @name heapSort.test
 * @description heapSort.js的测试文件
 */

const heapSort = require('../../es/heapSort');

describe('test heapSort.js', function() {
  it('test heapSort.ts expect correct result in situation 1', () => {
    expect(heapSort([ 7, 1, 2, 5, 3, 9, 6 ])).toEqual([ 1, 2, 3, 5, 6, 7, 9 ]);
  });
  it('test heapSort.ts expect correct result in situation 2', () => {
    expect(heapSort([])).toEqual([]);
  });
  it('test heapSort.js expect incorrect result', () => {
    expect(heapSort([ 7, 1, 2, 5, 3, 9, 6 ])).not.toEqual([ 1, 2, 3, 5, 6, 7, 8 ]);
  });
});
