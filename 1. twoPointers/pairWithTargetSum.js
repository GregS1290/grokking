/**

Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.


Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
*/

function pairWithTargetSum(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left, right];
    }
  }

  return [];
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6)); //[1,3]

console.log(pairWithTargetSum([2, 5, 9, 11], 11)); //[0,2]

console.log(pairWithTargetSum([2, 5, 9, 11], 20)); //[2,3]

console.log(pairWithTargetSum([], 5)); //[]

console.log(pairWithTargetSum([0, 2, 4, 5, 8, 20], 30)); //[]
