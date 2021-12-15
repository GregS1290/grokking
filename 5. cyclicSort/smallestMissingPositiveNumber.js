/*

Given an unsorted array containing numbers, find the smallest missing positive number in it.

Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'

Input: [3, -2, 0, 1, 2]
Output: 4

Input: [3, 2, 5, 1]
Output: 4

This problem follows the Cyclic Sort pattern and shares similarities with Find the Missing Number with one big difference. In this problem, the numbers are not bound by any range so we can have any number in the input array.

However, we will follow a similar approach though as discussed in Find the Missing Number to place the numbers on their correct indices and ignore all numbers that are out of the range of the array (i.e., all negative numbers and all numbers greater than or equal to the length of the array). Once we are done with the cyclic sort we will iterate the array and the first index that does not have the correct number will be the smallest missing positive number!

*/

function smallestMissingPositiveNumber(nums) {
  let i = 0,
    n = nums.length;

  while (i < n) {
    let j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]) {
      //swap
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return n + 1;
}

console.log(smallestMissingPositiveNumber([-3, 1, 5, 4, 2])); // 3

console.log(smallestMissingPositiveNumber([3, -2, 0, 1, 2])); // 4

console.log(smallestMissingPositiveNumber([3, 2, 5, 1])); // 4
