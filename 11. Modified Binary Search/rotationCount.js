/*
Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.

You can assume that the array does not have any duplicates.

Example 1:
Input: [10, 15, 1, 3, 8]
Output: 2
Explanation: The array has been rotated 2 times.

Example 2:
Input: [4, 5, 7, 9, 10, -1, 2]
Output: 5
Explanation: The array has been rotated 5 times.

Example 3:
Input: [1, 3, 8, 10]
Output: 0
Explanation: The array has not been rotated.


*/

function rotationCount(arr) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let middle = Math.floor(start + (end - start) / 2);

    //if middle is greater than the next element
    if (middle < end && arr[middle] > arr[middle + 1]) return middle + 1;

    //if middle is smaller than the previous element
    if (middle > start && arr[middle - 1] > arr[middle]) return middle;
    //if the start is smaller than the middle, the left is sorted, pivot right
    if (arr[start] < arr[middle]) {
      start = middle + 1;
    }
    //else the right side is sorted so pivot left
    else {
      end = middle - 1;
    }
  }

  return 0;
}

console.log(rotationCount([10, 15, 1, 3, 8])); // 2
console.log(rotationCount([4, 5, 7, 9, 10, -1, 2])); // 5
console.log(rotationCount([1, 3, 8, 10])); // 0
