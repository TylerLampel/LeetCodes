/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let sum = BigInt(digits.join("")) + 1n;
  return sum.toString().split("");
};
// @lc code=end
