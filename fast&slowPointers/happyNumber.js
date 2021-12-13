/*

Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

Input: 23
Output: true (23 is a happy number)

Input: 12
Output: false (12 is not a happy number)

*/

/*
approach 1 -> Set to store nums while trying to get to happy num, if we come across a number again its not happy
approach 2 --> fast and slow pointers , fast is double square func slow is square func, when theyre bboth equal compare if slow is === 1, if it is its happy if not its false (CRAZY)
*/

function happyNumber(num) {
  let slow = num,
    fast = num;

  while (true) {
    slow = findSquare(slow);
    fast = findSquare(findSquare(fast));

    if (fast === slow) break;
  }
  return slow === 1;
}

function findSquare(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(happyNumber(23)); // true
console.log(happyNumber(12)); // false
