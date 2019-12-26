/**
 * @name selectionSort.test
 * @description selectionSort.js的测试文件
 */

const selectionSort = require('../../es/selectionSort');

describe('test selectionSort.js', function() {
  it('test selectionSort.ts expect correct result', () => {
    expect(selectionSort([ 7, 1, 2, 5, 3, 9, 6 ])).toEqual([ 1, 2, 3, 5, 6, 7, 9 ]);
  });
  it('test selectionSort.js expect incorrect result', () => {
    expect(selectionSort([ 7, 1, 2, 5, 3, 9, 6 ])).not.toEqual([ 1, 2, 3, 5, 6, 7, 8 ]);
  });
});
