#
# @lc app=leetcode id=141 lang=ruby
#
# [141] Linked List Cycle
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
    visited_nodes = []
  is_cycle = false

  until head.nil? || is_cycle == true
    return is_cycle = true if visited_nodes.include?(head)
    visited_nodes << head
    head = head.next
  end

  return is_cycle
end
# @lc code=end

