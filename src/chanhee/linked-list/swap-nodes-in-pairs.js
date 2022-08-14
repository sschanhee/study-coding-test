/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let prev = head;
  let curr = head.next;
  const start = curr;
  prev.next = curr.next;
  curr.next = prev;
  curr = prev.next?.next;
  while (curr) {
    prev.next.next = curr.next;
    curr.next = prev.next;
    prev.next = curr;
    prev = prev.next.next;
    curr = prev.next?.next;
  }
  return start;
};
