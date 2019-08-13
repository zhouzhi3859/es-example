/**
 * @name mergeSort.test
 * @description mergeSort.js的测试文件
 */

const expect = require('chai').expect;
const mergeSort = require('../../javascript/mergeSort');

describe('test mergeSort.js', function() {
  it('test mergeSort.js expect correct result', () => {
    expect(JSON.stringify(mergeSort([ 7, 1, 2, 5, 3, 9, 6 ]))).to.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 9 ]));
  });
  it('test mergeSort.js expect correct result another situation', () => {
    expect(JSON.stringify(mergeSort([ 7 ]))).to.equal(JSON.stringify([ 7 ]));
  });
  it('test mergeSort.js expect incorrect result', () => {
    expect(JSON.stringify(mergeSort([ 7, 1, 2, 5, 3, 9, 6 ]))).to.not.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 8 ]));
  });
});
