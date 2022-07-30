/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    
    var length = 0;
    
    headLength = head
    
    while (headLength) {
        if (headLength) {
            length = length + 1
        }
        headLength = headLength.next
    }
        
    var removeIdx = length-n
    
    var count = 0;
    
    if (count==0 && n==length) {
        head = head.next
        count += 1
    } 
    
    var linkedList = new ListNode();
    var currentNode = linkedList
    
    if (n==1 && length ==1) {
        linkedList = null        
    }
        
    while (head) {
        if (count!=removeIdx) {
            currentNode.val = head.val
        }
        head = head.next
        
        count +=1
      
        if (head && count!=removeIdx) {
            currentNode.next = new ListNode();
            currentNode = currentNode.next          
        }            
    }
    return linkedList                   
};