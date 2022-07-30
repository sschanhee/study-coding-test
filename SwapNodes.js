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
 var swapPairs = function(head) {
    
    var count = 0;
    
    var LL  = new ListNode();
    var currentNode = LL
    
    if (!head) {
        LL = null;
    }
    
    while(head){
        
        if (!head.next){
            count = 1
        }
        
        if (count == 0){
            var pair1 = head.val
            var pair2 = head.next.val
            
            currentNode.next = new ListNode();
            
            currentNode.val = pair2
            currentNode.next.val = pair1
                
            head = head.next.next
            
            if (head) {
                currentNode.next.next = new ListNode();
                currentNode = currentNode.next.next
            }
            
        } else if (count == 1 ) {
            currentNode.val = head.val
            head = head.next
        } else {
            head = head.next
        }
    }    
    return LL
    
};