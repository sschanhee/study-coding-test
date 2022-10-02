function findKthLargest(nums: number[], k: number): number {
  // helper function declarations
  function swap(nums: number[], firstIdx: number, secondIdx: number) {
    const temp = nums[firstIdx];
    nums[firstIdx] = nums[secondIdx];
    nums[secondIdx] = temp;
  }

  function maxHeapify(nums: number[], nodeIdx: number) {
    const n = nums.length;
    const leftChildIdx = nodeIdx * 2 + 1;
    const rightChildIdx = nodeIdx * 2 + 2;
    const max = Math.max(
      nums[nodeIdx],
      ...(leftChildIdx < n ? [nums[leftChildIdx]] : []),
      ...(rightChildIdx < n ? [nums[rightChildIdx]] : [])
    );
    if (max === nums[nodeIdx]) {
      return;
    }
    if (max === nums[leftChildIdx]) {
      swap(nums, nodeIdx, leftChildIdx);
      maxHeapify(nums, leftChildIdx);
    } else if (max === nums[rightChildIdx]) {
      swap(nums, nodeIdx, rightChildIdx);
      maxHeapify(nums, rightChildIdx);
    }
  }
  function buildMaxHeap(nums: number[]) {
    const n = nums.length;
    const lastNonLeafIdx = Math.floor(n / 2) - 1;
    for (let i = lastNonLeafIdx; i >= 0; i--) {
      maxHeapify(nums, i);
    }
    return nums;
  }

  function bottomUpMaxHeapify(nums: number[], nodeIdx: number) {
    if (nodeIdx <= 0) {
      return;
    }
    const parentIdx = Math.floor((nodeIdx - 1) / 2);
    if (nums[parentIdx] >= nums[nodeIdx]) {
      return;
    }
    swap(nums, parentIdx, nodeIdx);
    bottomUpMaxHeapify(nums, parentIdx);
  }

  function insertToMaxHeap(nums: number[], newNum: number) {
    nums.push(newNum);
    bottomUpMaxHeapify(nums, nums.length - 1);
    return nums.slice(0, nums.length - 1);
  }

  function minHeapify(nums: number[], nodeIdx: number) {
    const n = nums.length;
    const leftChildIdx = nodeIdx * 2 + 1;
    const rightChildIdx = nodeIdx * 2 + 2;
    const min = Math.min(
      nums[nodeIdx],
      ...(leftChildIdx < n ? [nums[leftChildIdx]] : []),
      ...(rightChildIdx < n ? [nums[rightChildIdx]] : [])
    );
    if (min === nums[nodeIdx]) {
      return;
    }
    if (min === nums[leftChildIdx]) {
      swap(nums, nodeIdx, leftChildIdx);
      minHeapify(nums, leftChildIdx);
    } else if (min === nums[rightChildIdx]) {
      swap(nums, nodeIdx, rightChildIdx);
      minHeapify(nums, rightChildIdx);
    }
  }
  function buildMinHeap(nums: number[]) {
    const n = nums.length;
    const lastNonLeafIdx = Math.floor(n / 2) - 1;
    for (let i = lastNonLeafIdx; i >= 0; i--) {
      minHeapify(nums, i);
    }
    return nums;
  }

  // solution function implementation
  let heap = buildMinHeap(nums.slice(0, k));
  for (let i = k; i < nums.length; i++) {
    if (nums[i] <= heap[0]) {
      continue;
    }
    heap[0] = nums[i];
    minHeapify(heap, 0);
  }
  return heap[0];
}
