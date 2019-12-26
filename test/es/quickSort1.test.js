/**
 * @name quickSort1.test
 * @description quickSort1.js的测试文件
 */

const quickSort1 = require('../../es/quickSort1');

describe('test quickSort1.js', function() {
  it('test quickSort1.ts expect correct result', () => {
    expect(quickSort1([ 7, 1, 2, 5, 3, 9, 6 ])).toEqual([ 1, 2, 3, 5, 6, 7, 9 ]);
  });
  it('test quickSort1.js expect correct result another situation', () => {
    expect(quickSort1([ 7 ])).toEqual([ 7 ]);
  });
  it('test quickSort1.js expect incorrect result', () => {
    expect(quickSort1([ 7, 1, 2, 5, 3, 9, 6 ])).not.toEqual([ 1, 2, 3, 5, 6, 7, 8 ]);
  });
});
