/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

brute force
n = size of array
k = window size

Time O n * k -->
Space O k? --> just variables

Optimized
Time O n --> keep running sum
Space O k --> variables
*/

function maxSumSubarraySizek(arr, k) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
}

maxSumSubarraySizek([2, 3, 4, 1, 5], 2);
