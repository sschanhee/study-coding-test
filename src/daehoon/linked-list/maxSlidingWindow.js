/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let q1 = [];
  let q2 = [];
  let front = 0;
  let initCount = 0;
  let max = 0;

  while (initCount < k) {
    front = nums[0];
    q1.push(front);
    initCount++;
    nums.shift();
  }

  max = Math.max.apply(Math, q1);
  q2.push(max);
  q1.shift();

  while (nums.length != 0) {
    front = nums[0];
    q1.push(front);
    max = Math.max.apply(Math, q1);
    q2.push(max);
    q1.shift();
    nums.shift();
  }

  return q2;
};
