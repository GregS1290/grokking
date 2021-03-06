/*

We are given an unsorted array containing numbers taken from the range 1 to ānā. The array can have duplicates, which means some numbers will be missing. Find all those missing numbers.


Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7
Explanation: The array should have all numbers from 1 to 8, due to duplicates 4, 6, and 7 are missing.

Input: [2, 4, 1, 2]
Output: 3

Input: [2, 3, 2, 1]
Output: 4



*/

function allMissingNumbers(nums) {
  let results = [],
    i = 0;

  while (i < nums.length) {
    let j = nums[i] - 1;
    if (nums[j] !== nums[i]) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  console.log('after swaps', nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      results.push(i + 1);
    }
  }
  return results;
}

console.log(allMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1])); // 4 6 7

console.log(allMissingNumbers([2, 4, 1, 2])); // 3

console.log(allMissingNumbers([2, 3, 2, 1])); //4
