/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口法
const lengthOfLongestSubstring = function(s) {
  if (s.length === 1) {
    return 1;
  }
  let max = 0;
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = k; j < i; j++) {
      if (s[ i ] === s[ j ]) {
        k = j + 1;
        break;
      }
    }
    if (i - k + 1 > max) {
      max = i - k + 1;
    }
  }
  return max;
};
console.log(lengthOfLongestSubstring('au'));
module.exports = lengthOfLongestSubstring;
