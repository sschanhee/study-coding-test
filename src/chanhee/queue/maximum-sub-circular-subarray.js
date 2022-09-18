/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let totalSum = 0;
  let maxSum = nums[0];
  let minSum = nums[0];
  let currMaxSum = 0;
  let currMinSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];

    currMaxSum += nums[i];
    maxSum = currMaxSum > maxSum ? currMaxSum : maxSum;
    if (currMaxSum < 0) {
      currMaxSum = 0;
    }

    currMinSum += nums[i];
    minSum = currMinSum < minSum ? currMinSum : minSum;
    if (currMinSum > 0) {
      currMinSum = 0;
    }
  }
  return totalSum === minSum ? maxSum : Math.max(maxSum, totalSum - minSum);
};
