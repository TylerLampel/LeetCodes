/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // Initialise beg and end values as 0 and x respectively...
  let beg = 0,
    end = x,
    mid = 0;
  while (beg < end) {
    // Find middle of this range...
    mid = parseInt((beg + end) / 2);
    // If square of mid is equal to x...
    // return it as it is the square root...
    if (mid * mid === x) {
      return mid;
    }
    // If square of mid is greater than x...
    // jump to the beg half by setting end = mid – 1...
    if (x < mid * mid) {
      end = mid - 1;
    }
    // Otherwise, jump to the end half by setting beg = mid + 1...
    else {
      beg = mid + 1;
    }
  }
  // Save this value in result and return...
  return x < end * end ? end - 1 : end;
};
// @lc code=end
