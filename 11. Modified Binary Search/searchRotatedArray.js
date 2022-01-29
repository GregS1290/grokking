/*

Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.

Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. You can assume that the given array does not have any duplicates.

Example 1:

Input: [10, 15, 1, 3, 8], key = 15
Output: 1
Explanation: '15' is present in the array at index '1'.

Example 2:
Input: [4, 5, 7, 9, 10, -1, 2], key = 10
Output: 4
Explanation: '10' is present in the array at index '4'.


*/

function searchRotatedArray(arr, key) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === key) return middle;

    if (arr[start] <= arr[middle]) {
      if (key >= arr[start] && key < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      //right side is sorted in asc order
      if (key > arr[middle] && key <= arr[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }

  return -1;
}

console.log(searchRotatedArray([10, 15, 1, 3, 8], 15)); // 1
console.log(searchRotatedArray([4, 5, 7, 9, 10, -1, -2], 10)); // 4
