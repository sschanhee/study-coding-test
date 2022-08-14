/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function mergeTwoLists(lists) {
    let l1 = lists[0];
    let l2 = lists[1];
    if (l1 === null && l2 === null) {
      return null;
    }
    const start = new ListNode();
    let head = start;
    while (l1 || l2) {
      const l1Val = l1?.val ?? 10001;
      const l2Val = l2?.val ?? 10001;
      if (l1Val <= l2Val) {
        head.val = l1Val;
        l1 = l1.next;
      } else {
        head.val = l2Val;
        l2 = l2.next;
      }
      if (l1 || l2) {
        head.next = new ListNode();
        head = head.next;
      }
    }
    return start;
  }

  function merge(lists) {
    if (lists.length === 0) {
      return null;
    }
    if (lists.length === 1) {
      return lists[0];
    }
    if (lists.length === 2) {
      return mergeTwoLists(lists);
    }
    console.log(lists);
    const halfIdx = Math.floor(lists.length / 2);
    const frontMerged = merge(lists.slice(0, halfIdx));
    const backMerged = merge(lists.slice(halfIdx));
    return mergeTwoLists([frontMerged, backMerged]);
  }

  return merge(lists);
};
