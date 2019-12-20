/**
 * @name quickSort1.test
 * @description quickSort1.ts的测试文件
 */

const expect = require('chai').expect;
const quickSort1 = require('../../es/quickSort1');

describe('test quickSort1.ts', function() {
  it('test quickSort1.ts expect correct result', () => {
    expect(JSON.stringify(quickSort1([ 7, 1, 2, 5, 3, 9, 6 ]))).to.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 9 ]));
  });
  it('test quickSort1.ts expect correct result another situation', () => {
    expect(JSON.stringify(quickSort1([ 7 ]))).to.equal(JSON.stringify([ 7 ]));
  });
  it('test quickSort1.ts expect incorrect result', () => {
    expect(JSON.stringify(quickSort1([ 7, 1, 2, 5, 3, 9, 6 ]))).to.not.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 8 ]));
  });
});
