/**
 * @name bubbleSort.test
 * @description bubbleSort.js的测试文件
 */

const expect = require('chai').expect;
const bubbleSort = require('../../javascript/bubbleSort');

describe('test bubbleSort.js', function() {
  it('test bubbleSort.js expect correct result', () => {
    expect(JSON.stringify(bubbleSort([ 7, 1, 2, 5, 3, 9, 6 ]))).to.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 9 ]));
  });
  it('test bubbleSort.js expect incorrect result', () => {
    expect(JSON.stringify(bubbleSort([ 7, 1, 2, 5, 3, 9, 6 ]))).to.not.equal(JSON.stringify([ 1, 2, 3, 5, 6, 7, 8 ]));
  });
});
