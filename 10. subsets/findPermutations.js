/*

Given a set of distinct numbers, find all of its permutations.

Permutation is defined as the re-arranging of the elements of the set. For example, {1, 2, 3} has the following six permutations:

{1, 2, 3}
{1, 3, 2}
{2, 1, 3}
{2, 3, 1}
{3, 1, 2}
{3, 2, 1}
If a set has ‘n’ distinct elements it will have n!n! permutations.

Example 1:

Input: [1,3,5]
Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]


*/

function findPermutations(nums) {
  //initialize nums length, results and a queue to use for processing
  let numsLength = nums.length;
  const results = [],
    permutations = [];
  //initialize permutations with an empty set
  permutations.push([]);

  //loop through our nums array
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    // take all existing permutations and add our current number to it
    const n = permutations.length;
    for (let p = 0; p < n; p++) {
      //grab the old permutation
      const oldPermutation = permutations.shift();
      console.log(oldPermutation);
      //create a new permutation by adding the current number to each position
      for (let j = 0; i < oldPermutation.length; j++) {
        const newPermutation = oldPermutation.slice();
        newPermutation.splice(j, 0, currentNumber); // insert current number at index j
        console.log(newPermutation);
        if (newPermutation === numsLength) {
          results.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }
  return results;
}

// GENERATE PERMUTATIONS RECURSIVE

function generatePermutations(nums) {
  const result = [];
  generatePermutationsHelper(nums, 0, [], result);
  return result;
}

function generatePermutationsHelper(nums, index, currentPermutation, result) {
  if (index === nums.length) {
    result.push(currentPermutation);
  } else {
    // create a new permutation by adding the current number at every position
    for (let i = 0; i < currentPermutation.length + 1; i++) {
      newPermutation = currentPermutation.slice(); // clone the permutation
      newPermutation.splice(i, 0, nums[index]); // insert nums[index] at index 'i'
      generatePermutationsHelper(nums, index + 1, newPermutation, result);
    }
  }
}

const result = generatePermutations([1, 2, 3, 4]);

console.log(result);
