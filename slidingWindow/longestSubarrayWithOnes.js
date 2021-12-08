/*

Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.


Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.



*/

function longestSubarrayWithOnes(arr, k) {
  let windowStart = 0,
    maxLength = 0,
    maxOnesCount = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) maxOnesCount++;

    if (windowEnd - windowStart + 1 - maxOnesCount > k) {
      if (arr[windowStart] === 1) {
        maxOnesCount--;
      }
      windowStart++;
    }

    maxLength = Math.max(windowEnd - windowStart + 1, maxLength);
  }

  return maxLength;
}

/*

maxLength = 4
maxrepOnes = 2
0  1  2  3  4  5  6  7  8  9  10
0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1

               s
                        e
                            2
if e - s + 1 - maxrepOnes > k : // 2
move s up

maxlength = max(e - s + 1, maxlen)
*/

console.log(longestSubarrayWithOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6

console.log(
  longestSubarrayWithOnes([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
); // 9
