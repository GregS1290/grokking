/*
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Input: [-1, 0, 2, 3], target=3
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

Input: [-1, 4, 2, 1, 3], target=5
Output: 4
Explanation: There are four triplets whose sum is less than the target:
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]





*/

function tripletsWithSmallerSum(arr, target) {
  arr.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    count += searchPair(arr, target - arr[i], i);
  }

  return count;
}

function searchPair(arr, targetSum, first) {
  let count = 0;
  let left = first + 1,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < targetSum) {
      // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any
      // number between left and right to get a sum less than the target sum
      count += right - left;
      left++;
    } else {
      right--; // we need a pair with a smaller sum
    }
  }
  return count;
}

console.log(tripletsWithSmallerSum([-1, 0, 2, 3], 3)); // 2 [-1, 0, 3], [-1, 0, 2]

console.log(tripletsWithSmallerSum([-1, 4, 2, 1, 3], 5)); // 4 [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

// -1 1 2 3 4
