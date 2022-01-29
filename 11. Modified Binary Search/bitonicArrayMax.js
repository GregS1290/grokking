/*

Find the maximum value in a given Bitonic array. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

Example 1:

Input: [1, 3, 8, 12, 4, 2]
Output: 12
Explanation: The maximum number in the input bitonic array is '12'.

Example 2:
Input: [3, 8, 3, 1]
Output: 8

Example 3:
Input: [1, 3, 8, 12]
Output: 12

Example 4:
Input: [10, 9, 8]
Output: 10


*/

function bitonicArrayMax(arr) {
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

  return arr[start];
}

console.log(bitonicArrayMax([1, 3, 8, 12, 4, 2]));
console.log(bitonicArrayMax([3, 8, 3, 1]));
console.log(bitonicArrayMax([1, 3, 8, 12]));
console.log(bitonicArrayMax([10, 9, 8]));
