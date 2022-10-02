function topKFrequent(nums: number[], k: number): number[] {
  // helper function declarations
  function getNumOfDuplicatesMap(nums: number[]) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }
    return map;
  }

  function swap(nums: number[], firstIdx: number, secondIdx: number) {
    const temp = nums[firstIdx];
    nums[firstIdx] = nums[secondIdx];
    nums[secondIdx] = temp;
  }

  function maxHeapify(map: Map<any, any>, nums: number[], nodeIdx: number) {
    const n = nums.length;
    const leftChildIdx = nodeIdx * 2 + 1;
    const rightChildIdx = nodeIdx * 2 + 2;
    const max = Math.max(
      map.get(nums[nodeIdx]),
      ...(leftChildIdx < n ? [map.get(nums[leftChildIdx])] : []),
      ...(rightChildIdx < n ? [map.get(nums[rightChildIdx])] : [])
    );
    if (max === map.get(nums[nodeIdx])) {
      return;
    }
    if (max === map.get(nums[leftChildIdx])) {
      swap(nums, nodeIdx, leftChildIdx);
      maxHeapify(map, nums, leftChildIdx);
    } else if (max === map.get(nums[rightChildIdx])) {
      swap(nums, nodeIdx, rightChildIdx);
      maxHeapify(map, nums, rightChildIdx);
    }
  }
  function buildMaxHeap(map: Map<any, any>, nums: number[]) {
    const n = nums.length;
    const lastNonLeafIdx = Math.floor(n / 2) - 1;
    for (let i = lastNonLeafIdx; i >= 0; i--) {
      maxHeapify(map, nums, i);
    }
    return nums;
  }

  // solution function implementation
  const countMap = getNumOfDuplicatesMap(nums);
  const heap = buildMaxHeap(countMap, [...new Set(nums)]);
  const res: number[] = [];
  for (let i = 0; i < k; i++) {
    res.push(heap[0]);
    heap[0] = heap[heap.length - 1];
    maxHeapify(countMap, heap, 0);
    heap.pop();
  }
  return res;
}
