/*

We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

Input: [1, 4, 4, 3, 2]
Output: 4

Input: [2, 1, 3, 3, 5, 4]
Output: 3

Input: [2, 4, 1, 4, 4]
Output: 4


APPROACH

This problem follows the Cyclic Sort pattern and shares similarities with Find the Missing Number. Following a similar approach, we will try to place each number on its correct index. Since there is only one duplicate, if while swapping the number with its index both the numbers being swapped are same, we have found our duplicate!


*/

function findDuplicateNumber(nums) {
  let i = 0;

  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[i] !== i + 1) {
      if (nums[j] !== nums[i]) {
        [nums[j], nums[i]] = [nums[i], nums[j]];
      } else {
        //found duplicate
        return nums[i];
      }
    } else {
      i++;
    }
  }
  return -1;
}

console.log(findDuplicateNumber([1, 4, 4, 3, 2])); // 4

console.log(findDuplicateNumber([2, 1, 3, 3, 5, 4])); // 3

console.log(findDuplicateNumber([2, 4, 1, 4, 4])); // 4
