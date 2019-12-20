/**
 * @name quickSort2.test
 * @description quickSort2.ts的测试文件
 */

const expect = require('chai').expect;
const quickSort2 = require('../../es/quickSort2');

describe('test quickSort2.ts', function() {
  it('test quickSort2.ts expect correct result', () => {
    const data = [ 7, 1, 2, 5, 3, 9, 6 ];
    quickSort2(data);
    expect(JSON.stringify(data)).to.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 9 ]));
  });
  it('test quickSort2.ts expect correct result another situation', () => {
    const data = [ 7 ];
    quickSort2(data);
    expect(JSON.stringify(data)).to.equal(JSON.stringify([ 7 ]));
  });
  it('test quickSort2.ts expect incorrect result', () => {
    const data = [ 7, 1, 2, 5, 3, 9, 6 ];
    quickSort2(data);
    expect(JSON.stringify(data)).to.not.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 8 ]));
  });
});
