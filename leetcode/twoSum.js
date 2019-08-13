/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const tmp = {};
  const result = [];
  for (const i in nums) {
    const targetNum = target - nums[i];
    if (tmp[targetNum]) {
      result.push(tmp[targetNum]);
      result.push(i);
    } else {
      tmp[nums[i]] = i;
    }
  }
  return result;
};

module.exports = twoSum;
