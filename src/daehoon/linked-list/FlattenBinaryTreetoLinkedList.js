/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    
    let curr = root, runner = root
    
    while (curr) {
        if (curr.left) {
            runner = curr.left
            while (runner.right) {
                 runner = runner.right                                   
            }
            runner.right = curr.right
            curr.right = curr.left
            curr.left = null

        }         
        curr = curr.right
        // runner = curr
    }
};
