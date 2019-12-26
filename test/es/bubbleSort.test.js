/**
 * @name bubbleSort.test
 * @description bubbleSort.js的测试文件
 */

const bubbleSort = require('../../es/bubbleSort');

describe('test bubbleSort.js', function() {
  it('test bubbleSort.js expect correct result', () => {
    expect(bubbleSort([ 7, 1, 2, 5, 3, 9, 6 ])).toEqual([ 1, 2, 3, 5, 6, 7, 9 ]);
  });
  it('test bubbleSort.js expect incorrect result', () => {
    expect(bubbleSort([ 7, 1, 2, 5, 3, 9, 6 ])).not.toEqual([ 1, 2, 3, 5, 6, 7, 8 ]);
  });
});
