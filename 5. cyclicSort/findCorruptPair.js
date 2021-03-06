/*

We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

Input: [3, 1, 2, 5, 2]
Output: [2, 4]
Explanation: '2' is duplicated and '4' is missing.

Input: [3, 1, 2, 3, 6, 4]
Output: [3, 5]
Explanation: '3' is duplicated and '5' is missing.


*/

function findCorruptPair(nums) {
  let i = 0;

  while (i < nums.length) {
    let j = nums[i] - 1;

    if (nums[j] !== nums[i]) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }

  //return something if theres no corrupt pair
  return [-1, -1];
}

console.log(findCorruptPair([3, 1, 2, 5, 2])); // [2,4]

console.log(findCorruptPair([3, 1, 2, 3, 6, 4])); // [3,5]
