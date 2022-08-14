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
 var reverseKGroup = function(head, k) {
    
    let LL = new ListNode()
    let currentNode = LL
    
    let count = 0
    let list = [];
    
    while (head) {
        
        list.push(head.val)
        head = head.next
        count += 1
        
        if (head==null && count!=k) {      
            list.forEach(function(item,index){
                currentNode.val = item
                if (index != list.length-1) {
                    currentNode.next = new ListNode()
                    currentNode = currentNode.next
                }
            });
        }
        
        if (count == k) {
            reversedList = list.reverse()  
            reversedList.forEach(function(item,index){
                currentNode.val = item
                if (index < (list.length-1)) {
                    currentNode.next = new ListNode()
                    currentNode = currentNode.next
                }
            });
            
            if (head) {
                currentNode.next = new ListNode()
                currentNode = currentNode.next
            }
            
            list = [];
            count = 0;
        }
        

        
    }
    
    return LL
    
};