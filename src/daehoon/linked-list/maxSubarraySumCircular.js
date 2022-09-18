/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let curSum1 = 0;
  let curSum2 = 0;

  let totalSum = 0;
  let maxSum = -Infinity;
  let minSum = Infinity;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];

    curSum1 = Math.max(nums[i], curSum1 + nums[i]);
    maxSum = Math.max(curSum1, maxSum);

    curSum2 = Math.min(nums[i], curSum2 + nums[i]);
    minSum = Math.min(curSum2, minSum);
  }

  let temp = maxSum;

  maxSum = maxSum < totalSum - minSum ? totalSum - minSum : maxSum;
  maxSum = maxSum === 0 ? temp : maxSum;

  return maxSum;
};
