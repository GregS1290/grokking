/*

Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

Input: [2, 5, 3, 10], target=30
Output: [2], [5], [2, 5], [3], [5, 3], [10]
Explanation: There are six contiguous subarrays whose product is less than the target.

Input: [8, 2, 6, 5], target=50
Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
Explanation: There are seven contiguous subarrays whose product is less than the target.


*/

function subArraysWithProductLessThanNumber(arr, target) {
  const result = [];
  for (let left = 0; left < arr.length; left++) {
    let runningProduct = arr[left];
    if (runningProduct < target) {
      result.push([arr[left]]);
    }
    if (left === arr.length - 1) break;
    let right = left + 1;
    while (right < arr.length) {
      runningProduct *= arr[right];
      if (runningProduct < target) {
        result.push([arr[left], arr[right]]);
      }
      right++;
    }
  }

  return result;
}

console.log(subArraysWithProductLessThanNumber([2, 5, 3, 10], 30)); // [2], [5], [2, 5], [3], [5, 3], [10]

console.log(subArraysWithProductLessThanNumber([8, 2, 6, 5], 50)); // [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
