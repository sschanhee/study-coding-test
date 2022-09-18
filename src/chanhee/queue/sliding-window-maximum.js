/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Timelimit에 걸린 코드입니다.
function findMax(queue, length) {
  let maxNum = -Infinity;
  let maxIdx = 0;
  for (let i = 0; i < length; i++) {
    const currNum = queue.dequeue();
    maxNum = currNum > maxNum ? currNum : maxNum;
    maxIdx = currNum > maxNum ? i : maxIdx;
    queue.enqueue(currNum);
  }
  return [maxIdx, maxNum];
}

var maxSlidingWindow = function (nums, k) {
  const window = new Queue();
  const maxArray = [];
  let maxIdxInQueue = 0;
  for (let i = 0; i < k; i++) {
    window.enqueue(nums[i]);
    maxIdxInQueue = nums[i] > nums[maxIdxInQueue] ? i : maxIdxInQueue;
  }
  maxArray.push(nums[maxIdxInQueue]);
  for (let nextIdx = k; nextIdx < nums.length; nextIdx++) {
    window.enqueue(nums[nextIdx]);
    window.dequeue();
    if (nums[nextIdx] >= maxArray[maxArray.length - 1]) {
      maxIdxInQueue = k - 1;
      maxArray.push(nums[nextIdx]);
      continue;
    }
    if (maxIdxInQueue === 0) {
      [maxIdx, maxNum] = findMax(window, k);
      maxIdxInQueue = maxIdx;
      maxArray.push(maxNum);
    } else {
      maxIdxInQueue -= 1;
      maxArray.push(maxArray[maxArray.length - 1]);
    }
  }
  return maxArray;
};
