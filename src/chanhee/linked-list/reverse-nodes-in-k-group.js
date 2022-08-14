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
var reverseKGroup = function (head, k) {
  if (k === 1) {
    return head;
  }

  function countKNodes(head, k) {
    if (head === null) {
      return false;
    }
    let count = 0;
    while (head) {
      count += 1;
      if (count === k) {
        return true;
      }
      head = head.next;
    }
    return false;
  }

  function reverseKNodes(head, k) {
    if (k <= 1) {
      return console.log("wrong k value, k is ", k);
    }
    if (k >= 2) {
      let firstPointer = head.next;
      let midPointer = head;
      let lastPointer = null;
      for (let i = 0; i < k; i++) {
        midPointer.next = lastPointer;
        lastPointer = midPointer;
        midPointer = firstPointer;
        firstPointer = firstPointer?.next;
      }
      const newHead = lastPointer;
      const nextNode = midPointer;
      const newTail = head;
      return [newHead, newTail, nextNode];
    }
  }

  let prevTail = null;
  let realHead = null;
  let pointer = head;
  let moreThanKNodesLeft = true;
  while (moreThanKNodesLeft) {
    const [_head, _tail, nextNode] = reverseKNodes(pointer, k);
    if (realHead === null) {
      realHead = _head;
    }
    if (prevTail) {
      prevTail.next = _head;
    }
    moreThanKNodesLeft = countKNodes(nextNode, k);
    pointer = nextNode;
    prevTail = _tail;
    if (!moreThanKNodesLeft) {
      prevTail.next = nextNode;
    }
  }
  return realHead;
};
