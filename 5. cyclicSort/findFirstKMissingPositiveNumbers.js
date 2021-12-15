/*
Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.


*/

function findFirstKMissingPositiveNumbers(nums, k) {
  let i = 0,
    count = 1;

  while (i < nums.length) {
    let j = nums[i] - 1;

    if (nums[i] > 0 && nums[i] < nums.length && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }
  console.log('cyclic sort', nums);
  const results = [];
  while (results.length < k) {
    if (nums[count - 1] && nums[count - 1] !== count) {
      results.push(count);
    } else if (count > nums.length) {
      results.push(count);
    }
    count++;
  }
  return results;
}

console.log(findFirstKMissingPositiveNumbers([3, -1, 4, 5, 5], 3)); // [1, 2, 6]

console.log(findFirstKMissingPositiveNumbers([2, 3, 4], 3)); //[1, 5 ,6]

console.log(findFirstKMissingPositiveNumbers([-2, -3, 4], 3)); //[1, 2, 3]
