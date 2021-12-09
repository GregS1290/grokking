/*

Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
Output: 4
Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].

Input: [2, 11, 2, 2, 1], Key=2
Output: 2
Explanation: The first two elements after removing every 'Key' will be [11, 1].


*/

function removeKey(arr, key) {
  let nVal = 0,
    i = 0;

  while (i < arr.length) {
    if (arr[i] !== key) {
      arr[nVal] = arr[i];
      nVal++;
    }

    i++;
  }
  return nVal;
}

console.log(removeKey([3, 2, 3, 6, 3, 10, 9, 3], 3)); // 4

console.log(removeKey([2, 11, 2, 2, 1], 2)); //2
