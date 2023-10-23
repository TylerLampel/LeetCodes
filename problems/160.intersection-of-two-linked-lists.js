/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let hA = headA;
    let hB = headB;
    while(hA != hB) {
        hA = hA ? hA.next : headB;
        hB = hB ? hB.next : headA;
    }
    return hA
};
// @lc code=end

