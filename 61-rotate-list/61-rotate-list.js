/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k === 0 || !head || !head.next) return head;

  let slow = head;
  let fast = head;
  let len = 1;

  while (fast.next) {
    fast = fast.next;
    len++;
  }

  k %= len;
  let i = len - k;

  while (i) {
    i--;
    fast.next = slow;
    fast = fast.next;
    slow = slow.next || slow;
    fast.next = null;
  }

  return slow;
};