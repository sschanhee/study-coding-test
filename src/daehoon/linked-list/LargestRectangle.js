
/** 
 * @param {number} val
 * @return {void}
 */


/** 2nd code
 * @param {number} val
 * @return {void}
 */

 var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;
    let area = 0;
    heights.push(-1)
    let length = heights.length;
    for (let i = 0; i < length; i++) {
        let height = heights[i];
        if (stack.length===0 || height >= heights[stack[stack.length-1]]){
            stack.push(i)
        } else {
            let top = stack[stack.length-1]
            stack.pop()
            area = heights[top] * (stack.length===0 ? i : i-stack[stack.length-1]-1);
            maxArea = maxArea > area ? maxArea : area;
            i--;
        }
    } 
    return maxArea
};

/*

### 1st code

 var largestRectangleArea = function(heights) {
    let leftCheck = [];
    let rightCheck = [];
    
    let maxArea = 0;
    
    let length = heights.length;
    
    for (let i = 0; i < length; i++) {
        let height = heights[i];
        
        leftCheck.push(-1);
        for (let j=i-1; (j>-1 & j<i);j--) {
            if (heights[j] < height) {
                leftCheck.pop()
                leftCheck.push(j)
                break;
            }
        }
        rightCheck.push(length);
        for (let k=i+1; (k > i & k < length);k++) {
            if (heights[k] < height) {
                rightCheck.pop()
                rightCheck.push(k)
                break;
            }
        }
    }
    for (let i = 0 ; i<length ; i++) {
        maxArea = (maxArea <= heights[i] * (rightCheck[i] - leftCheck[i]-1)) ? heights[i] * (rightCheck[i]-leftCheck[i]-1)  : maxArea
    }
    return maxArea;
};

*/