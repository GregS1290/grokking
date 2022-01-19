/*

Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Example 1:
Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the given array.

Example 2:
Input: ['a', 'c', 'f', 'h'], key = 'b'
Output: 'c'
Explanation: The smallest letter greater than 'b' is 'c'.

Example 3:
Input: ['a', 'c', 'f', 'h'], key = 'm'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.

Example 4:
Input: ['a', 'c', 'f', 'h'], key = 'h'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.


*/

function nextLetter(arr, key) {
  if (arr[arr.length - 1].charCodeAt(0) <= key.charCodeAt(0)) return arr[0];

  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);

    if (arr[middle] === key) {
      if (middle + 1 <= arr.length - 1) {
        return arr[middle + 1];
      } else {
        return arr[0];
      }
    } else if (arr[middle].charCodeAt(0) < key.charCodeAt(0)) {
      start = middle + 1;
    } else if (arr[middle].charCodeAt(0) > key.charCodeAt(0)) {
      end = middle - 1;
    }
  }

  return arr[start];
}

console.log(nextLetter(['a', 'c', 'f', 'h'], 'f')); // h

console.log(nextLetter(['a', 'c', 'f', 'h'], 'b')); // c

console.log(nextLetter(['a', 'c', 'f', 'h'], 'm')); // a

console.log(nextLetter(['a', 'c', 'f', 'h'], 'h')); // a
