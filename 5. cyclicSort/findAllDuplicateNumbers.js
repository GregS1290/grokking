/*

We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array has some numbers appearing twice, find all these duplicate numbers without using any extra space.

Input: [3, 4, 4, 5, 5]
Output: [4, 5]

Input: [5, 4, 7, 2, 3, 5, 3]
Output: [3, 5]



*/

function findAllDuplicateNumbers(nums) {
  const results = [];
  let i = 0;

  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[j] !== nums[i]) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
    } else {
      i++;
    }
  }
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      results.push(nums[i]);
    }
  }
  return results;
}

console.log(findAllDuplicateNumbers([3, 4, 4, 5, 5])); // [4,5]

console.log(findAllDuplicateNumbers([5, 4, 7, 2, 3, 5, 3])); // [3,5]
