/*

Given a Bitonic array, find if a given ‘key’ is present in it. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.



Example 1:
Input: [1, 3, 8, 4, 3], key=4
Output: 3

Example 2:
Input: [3, 8, 3, 1], key=8
Output: 1

Example 3:
Input: [1, 3, 8, 12], key=12
Output: 3

Example 4:
Input: [10, 9, 8], key=10
Output: 0

*/

function searchBitonicArray(arr, key) {
  let maxIdx = findMaxInBitonicArray(arr);

  if (arr[maxIdx] === key) return maxIdx;

  let searchLeft = binarySearch(arr, key, true, 0, maxIdx);

  let searchRight = binarySearch(arr, key, false, maxIdx, arr.length - 1);

  if (searchLeft !== -1) return searchLeft;

  if (searchRight !== -1) return searchRight;

  return -1;
}

function binarySearch(arr, key, asc = true, start, end) {
  while (start < end) {
    let middle = Math.floor(start + (end - start) / 2);

    if (asc) {
      if (arr[middle] === key) {
        return middle;
      } else if (arr[middle] < key) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    } else if (!asc) {
      if (arr[middle] === key) {
        return middle;
      } else if (arr[middle] < key) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
  }
  return -1;
}

function findMaxInBitonicArray(arr) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let middle = Math.floor(start + (end - start) / 2);

    if (arr[middle] < arr[middle + 1]) {
      start = middle + 1;
    } else if (arr[middle] > arr[middle + 1]) {
      end = middle;
    }
  }

  return start;
}

console.log(searchBitonicArray([1, 3, 8, 4, 3], 4)); // 3
console.log(searchBitonicArray([3, 8, 3, 1], 8)); // 1
console.log(searchBitonicArray([1, 3, 8, 12], 12)); //3
console.log(searchBitonicArray([10, 9, 8], 10)); //10
