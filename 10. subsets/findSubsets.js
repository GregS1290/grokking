/*

Given a set with distinct elements, find all of its distinct subsets.

Example 1:

Input: [1, 3]
Output: [], [1], [3], [1,3]
Example 2:

Input: [1, 5, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]


*/

function findSubsets(nums) {
  const subsets = [];

  //start by adding the empty subset
  subsets.push([]);
  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i];
    //take all existing subsets and insert the current number in them to create new subsets

    const n = subsets.length;
    for (let j = 0; j < n; j++) {
      //create a new subset from existing subset and insert the current element into it
      const set1 = subsets[j].slice(); //clone permutation
      set1.push(currentNumber);
      subsets.push(set1);
    }
  }

  return subsets;
}

console.log(findSubsets([1, 3]));
console.log(findSubsets([1, 5, 3]));
