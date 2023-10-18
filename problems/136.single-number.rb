#
# @lc app=leetcode id=136 lang=ruby
#
# [136] Single Number
#

# @lc code=start
# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    hash = {}
    nums.each do |k|
      hash[k] ||= 0
      hash[k] += 1
    end
    hash.key(1)
end
# @lc code=end

