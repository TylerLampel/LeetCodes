/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var ans = [];
  var exist = {};

  for (var i = 0; i < nums.length; i++) {
    if (typeof exist[target - nums[i]] !== "undefined") {
      ans.push(exist[target - nums[i]]);
      ans.push(i);
    }
    exist[nums[i]] = i;
  }

  return ans;
};
// @lc code=end
