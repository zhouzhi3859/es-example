/**
 * @name lengthOfLongestSubstring.test
 * @description lengthOfLongestSubstring.js的测试文件
 */

const lengthOfLongestSubstring = require('../../leetcode/lengthOfLongestSubstring');

describe('test lengthOfLongestSubstring.js', function() {
  it('test lengthOfLongestSubstring.js correct situation 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });
  it('test lengthOfLongestSubstring.js correct situation 2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });
  it('test lengthOfLongestSubstring.js correct situation 3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
  it('test lengthOfLongestSubstring.js correct situation 4', () => {
    expect(lengthOfLongestSubstring('au')).toBe(2);
  });
  it('test lengthOfLongestSubstring.js correct situation 5', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });
});
