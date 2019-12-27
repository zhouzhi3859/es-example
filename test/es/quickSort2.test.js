/**
 * @name quickSort2.test
 * @description quickSort2.js的测试文件
 */

const quickSort2 = require('../../es/quickSort2');

describe('test quickSort2.js', function() {
  it('test quickSort2.ts expect correct result in situation 1', () => {
    const data = [ 7, 1, 2, 5, 3, 9, 6 ];
    quickSort2(data);
    expect(data).toEqual([ 1, 2, 3, 5, 6, 7, 9 ]);
  });
  it('test quickSort2.ts expect correct result in situation 2', () => {
    const data = [ 1, 2, 3, 5, 6, 7 ,9 ];
    quickSort2(data);
    expect(data).toEqual([ 1, 2, 3, 5, 6, 7, 9 ]);
  });
  it('test quickSort2.js expect correct result in situation 3', () => {
    const data = [ 7 ];
    quickSort2(data);
    expect(data).toEqual([ 7 ]);
  });
  it('test quickSort2.js expect incorrect result', () => {
    const data = [ 7, 1, 2, 5, 3, 9, 6 ];
    quickSort2(data);
    expect(data).not.toEqual([ 1, 2, 3, 5, 6, 7, 8 ]);
  });
});
