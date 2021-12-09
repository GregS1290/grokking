/*

Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]

Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]

*/

function dutchNationalFlag(arr) {
  let low = 0,
    high = arr.length - 1,
    i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
      i++;
    } else if (arr[i] === 1) {
      i++;
    } else if (arr[i] === 2) {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    }
  }

  return arr;
}

console.log(dutchNationalFlag([1, 0, 2, 1, 0])); //[0 0 1 1 2]

console.log(dutchNationalFlag([2, 2, 0, 1, 2, 0])); // [0 0 1 2 2 2 ]

/*
APPROACH

We can use a Two Pointers approach while iterating through the array. Let’s say the two pointers are called low and high which are pointing to the first and the last element of the array respectively. So while iterating, we will move all 0s before low and all 2s after high so that in the end, all 1s will be between low and high.



*/
