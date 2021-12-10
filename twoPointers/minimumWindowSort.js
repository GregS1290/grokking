/*
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted

Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted

Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted.
*/

/*

APPROACH
From the beginning and end of the array, find the first elements that are out of the sorting order. The two elements will be our candidate subarray.
Find the maximum and minimum of this subarray.
Extend the subarray from beginning to include any number which is bigger than the minimum of the subarray.
Similarly, extend the subarray from the end to include any number which is smaller than the maximum of the subarray.


*/

function minimumWindowSort(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
    left++;
  }

  if (left === arr.length - 1) return 0;

  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--;
  }

  // find the maximum and minimum of the subarray
  let subarrayMax = -Infinity,
    subarrayMin = Infinity;
  for (k = left; k < right + 1; k++) {
    subarrayMax = Math.max(subarrayMax, arr[k]);
    subarrayMin = Math.min(subarrayMin, arr[k]);
  }

  while (left > 0 && arr[left - 1] > subarrayMin) {
    left--;
  }

  while (right < arr.length - 1 && arr[right + 1] < subarrayMax) {
    right++;
  }

  return right - left + 1;
}

console.log(minimumWindowSort([1, 2, 5, 3, 7, 10, 9, 12])); //5
console.log(minimumWindowSort([1, 3, 2, 0, -1, 7, 10])); //5
console.log(minimumWindowSort([1, 2, 3])); //0
console.log(minimumWindowSort([3, 2, 1])); //3
