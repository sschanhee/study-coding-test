/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// commit test

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function(l1, l2) {    
    var LL = new ListNode();
    var currentNode = LL
    
    var over = 0
    
    while ((over==1) || l1 || l2) {
        
        var val1 = l1 !== null ? l1.val : 0;
        var val2 = l2 !== null ? l2.val : 0;
        var sum = val1 + val2 + over
        
        over = 0
        
        if (sum >= 10){
            currentNode.val = sum % 10
            over = 1
        } else {
            currentNode.val = sum
        }
        
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
        
        if ((over == 1) || l1 || l2) {
            currentNode.next = new ListNode();
            currentNode = currentNode.next
        }
    }
    return LL
}
