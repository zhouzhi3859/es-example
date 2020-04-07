/**
 * @name decodeStr.test
 * @description 针对decodeStr.js的测试文件
 */

const decodeStr = require('../../es/decodeStr');

describe('test decodeStr.js', function() {
  it('test decodeStr.js expect correct result in situation 1', () => {
    expect(decodeStr('2[a]1[bc]')).toBe('aabc');
  });
  it('test decodeStr.js expect correct result in situation 2', () => {
    expect(decodeStr('2[e2[d]]')).toBe('eddedd');
  });
  it('test decodeStr.js expect correct result in situation 3', () => {
    expect(decodeStr('3[abc]2[cd]ff')).toBe('abcabcabccdcdff');
  });
  it('test decodeStr.js expect correct result in situation 4', () => {
    expect(decodeStr('')).toBe('');
  });
  it('test decodeStr.js expect incorrect result', () => {
    expect(decodeStr('3[abc]2[cd]ff')).not.toBe('dsfsd');
  });
});
