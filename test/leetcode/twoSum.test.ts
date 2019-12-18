/**
 * @name twoSum.test
 * @description twoSum.js的测试文件
 */

const expect = require('chai').expect;
const twoSum = require('../../leetcode/twoSum.ts');

describe('test twoSum.ts', function() {
  it('test twoSum.ts correct', () => {
    expect(JSON.stringify(twoSum([ 2, 7, 11, 15 ], 9))).to.equal(JSON.stringify([ '0', '1' ]));
  });
});
