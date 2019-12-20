/**
 * @name selectionSort.test
 * @description selectionSort.js的测试文件
 */

const expect = require('chai').expect;
const selectionSort = require('../../es/selectionSort');

describe('test selectionSort.ts', function() {
  it('test selectionSort.ts expect correct result', () => {
    expect(JSON.stringify(selectionSort([ 7, 1, 2, 5, 3, 9, 6 ]))).to.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 9 ]));
  });
  it('test selectionSort.ts expect incorrect result', () => {
    expect(JSON.stringify(selectionSort([ 7, 1, 2, 5, 3, 9, 6 ]))).to.not.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 8 ]));
  });
});
