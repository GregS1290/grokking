/*

Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.


Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.


*/

function tripletSumToZero(arr) {
  arr = arr.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let currentSum = arr[i];
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      if (currentSum + arr[left] + arr[right] > 0) {
        right--;
      } else if (currentSum + arr[left] + arr[right] < 0) {
        left++;
      } else {
        results.push([arr[i], arr[left], arr[right]]);
        while (arr[left] === arr[left + 1]) {
          left++;
        }
        left++;
      }
    }
  }
  return results;
}

function tripletSumZeroOptimal(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    // skip same element to avoid duplicate triplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    searchPair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function searchPair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      // found the triplet
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate triplets
      }
    } else if (target_sum > current_sum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}

console.log(tripletSumToZero([-3, 0, 1, 2, -1, 1, -2])); // [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]

console.log(tripletSumToZero([-5, 2, -1, -2, 3])); // [[-5, 2, 3], [-2, -1, 3]]

console.log(tripletSumToZero([-5, -2, -1, -2, -3])); // []
