/**
 * @name lengthOfLongestSubstring.test
 * @description lengthOfLongestSubstring.js的测试文件
 */

const expect = require('chai').expect;
const lengthOfLongestSubstring = require('../../leetcode/lengthOfLongestSubstring.ts');

describe('test lengthOfLongestSubstring.ts', function() {
  it('test lengthOfLongestSubstring.ts correct situation 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).to.equal(3);
  });
  it('test lengthOfLongestSubstring.ts correct situation 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).to.equal(1);
  });
  it('test lengthOfLongestSubstring.ts correct situation 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).to.equal(3);
  });
  it('test lengthOfLongestSubstring.ts correct situation 4', () => {
    expect(lengthOfLongestSubstring('au')).to.equal(2);
  });
  it('test lengthOfLongestSubstring.ts correct situation 5', () => {
    expect(lengthOfLongestSubstring('a')).to.equal(1);
  });
});
