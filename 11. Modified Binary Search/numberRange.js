/*

Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

Example 1:
Input: [4, 6, 6, 6, 9], key = 6
Output: [1, 3]

Example 2:
Input: [1, 3, 8, 10, 15], key = 10
Output: [3, 3]

Example 3:
Input: [1, 3, 8, 10, 15], key = 12
Output: [-1, -1]

*/

function numberRange(arr, key) {
  const result = [-1, -1];
  result[0] = binarySearch(arr, key, false);
  if (result[0] !== -1) result[1] = binarySearch(arr, key, true);
  return result;
}

function binarySearch(arr, key, findMaxIndex) {
  let keyIndex = -1;
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    }
    //else we found our first key
    else {
      keyIndex = mid;
      if (findMaxIndex) {
        //if findMax is true, we're going to keep looking upwards for possible upper key
        start = mid + 1;
      } else {
        //if FindMax is false, we're going to start looking downwards for possible lower key
        end = mid - 1;
      }
    }
  }

  return keyIndex;
}

console.log(numberRange([4, 6, 6, 6, 9], 6)); // [1,3]

console.log(numberRange([1, 3, 8, 10, 15], 10)); // [3,3]

console.log(numberRange([1, 3, 8, 10, 15], 12)); // [-1,-1]
