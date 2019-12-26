/**
 * @name mergeSort.test
 * @description mergeSort.js的测试文件
 */

const mergeSort = require('../../es/mergeSort');

describe('test mergeSort.js', function() {
  it('test mergeSort.js expect correct result', () => {
    expect(mergeSort([ 7, 1, 2, 5, 3, 9, 6 ])).toEqual([ 1, 2, 3, 5, 6, 7, 9 ]);
  });
  it('test mergeSort.js expect correct result another situation', () => {
    expect(mergeSort([ 7 ])).toEqual([ 7 ]);
  });
  it('test mergeSort.js expect incorrect result', () => {
    expect(mergeSort([ 7, 1, 2, 5, 3, 9, 6 ])).not.toEqual([ 1, 2, 3, 5, 6, 7, 8 ]);
  });
});
