/*
We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. This means that the object with sequence number 3 was created just before the object with sequence number 4.

Write a function to sort the objects in-place on their creation sequence number in O(n) and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

Example 1:

Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]

Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]

Input: [1, 5, 6, 4, 3, 2]
Output: [1, 2, 3, 4, 5, 6]



*/

function cyclicSortOptimized(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  return nums;
}

function cyclicSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i + 1) {
      continue;
    } else {
      let currIdx = i;
      while (arr[currIdx] - 1 !== currIdx) {
        let tempIdx = arr[currIdx] - 1;
        let tempNum = arr[tempIdx];
        arr[tempIdx] = arr[currIdx];
        arr[currIdx] = tempNum;
      }
    }
  }
  return arr;
}

console.log(cyclicSortOptimized([3, 1, 5, 4, 2])); //[1,2,3,4,5]

console.log(cyclicSortOptimized([2, 6, 4, 3, 1, 5])); //[1,2,3,4,5,6]

console.log(cyclicSortOptimized([1, 5, 6, 4, 3, 2])); //[1,2,3,4,5,6]
