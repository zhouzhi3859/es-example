/**
 * @name selectionSort.test
 * @description selectionSort.js的测试文件
 */

const expect = require('chai').expect;
const selectionSort = require('../../javascript/selectionSort');

describe('test selectionSort.js', function() {
  it('test selectionSort.js expect correct result', () => {
    expect(JSON.stringify(selectionSort([ 7, 1, 2, 5, 3, 9, 6 ]))).to.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 9 ]));
  });
  it('test selectionSort.js expect incorrect result', () => {
    expect(JSON.stringify(selectionSort([ 7, 1, 2, 5, 3, 9, 6 ]))).to.not.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 8 ]));
  });
});
