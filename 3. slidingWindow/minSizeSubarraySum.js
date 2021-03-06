/*

Given an array of positive numbers and a positive number āS,ā find the length of the smallest contiguous subarray whose sum is greater than or equal to āSā. Return 0 if no such subarray exists.

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1]
or [1, 1, 6].

*/

function minSizeSubarraySum(arr, s) {
  let windowStart = 0,
    minLength = Infinity,
    currSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currSum += arr[windowEnd];

    while (currSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      currSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log(minSizeSubarraySum([1, 1, 1, 1, 1], 8));
