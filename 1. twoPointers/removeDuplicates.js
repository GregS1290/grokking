/*

Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.


Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

*/

function removeDuplicates(arr) {
  let anchor = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] === arr[right + 1]) {
      anchor++;
      let pointer = right + 1;
      while (arr[right] === arr[pointer]) {
        pointer++;
      }
      let temp = arr[right + 1];
      arr[right + 1] = arr[pointer];
      arr[pointer] = temp;
      right = pointer + 1;
    }
    anchor++;
  }

  return anchor;
}

function removeDuplicatesOptimized(arr) {
  let nextNonDuplicate = 1,
    i = 1;

  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate++;
    }
    i++;
  }

  return nextNonDuplicate;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9])); //4

console.log(removeDuplicates([2, 2, 2, 11])); //2

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7])); //7

console.log(removeDuplicates([])); // 0
