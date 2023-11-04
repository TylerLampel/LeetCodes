/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head)return null;
    let cur = head.next,
        prev = head;
    while(cur){
        if(cur.val === val){
            cur = cur.next;
            prev.next = cur;
        }else{
            prev = cur;
            cur = cur.next
        }
    }
    if(head.val === val)return head.next;
    return head;
};
// @lc code=end

