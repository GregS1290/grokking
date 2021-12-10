/*

Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number


Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.

Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.
*/

function fourSum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < arr.length - 3; i++) {
    if (arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i && arr[j] === arr[j - 1]) continue; //LEFT THIS OUT
      searchForPair(arr, target - arr[i] - arr[j], i, j, results);
    }
  }

  return results;
}

function searchForPair(arr, target, numOneIdx, numTwoIdx, results) {
  let left = numTwoIdx + 1;
  let right = arr.length - 1;

  while (left < right) {
    let currSum = arr[left] + arr[right];

    if (currSum === target) {
      results.push([arr[numOneIdx], arr[numTwoIdx], arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] === arr[left - 1]) {
        left++; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right--; // skip same element to avoid duplicate triplets
      }
    } else if (currSum < target) {
      left++;
    } else if (currSum > target) {
      right--;
    }
  }
  return results;
}

console.log(fourSum([4, 1, 2, -1, 1, -3, -3], 1)); // [-3, -1, 1, 4], [-3, 1, 1, 2]

console.log(fourSum([2, 0, -1, 1, -2, 2], 2)); // [-2, 0, 2, 2], [-1, 0, 1, 2]
