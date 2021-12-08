/*

Given a string and a pattern, find all anagrams of the pattern in the given string.

Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N! permutations (or anagrams) of a string having N characters. For example, here are the six anagrams of the string “abc”:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

*/

function findStringAnagrams(str, pattern) {
  const results = [];
  let windowStart = 0,
    match = 0;

  const patternMap = new Map();

  for (let letter of pattern) {
    if (!patternMap.has(letter)) patternMap.set(letter, 0);

    patternMap.set(letter, patternMap.get(letter) + 1);
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];

    if (patternMap.has(rightChar)) {
      patternMap.set(rightChar, patternMap.get(rightChar) - 1);
      if (patternMap.get(rightChar) === 0) match++;
    }

    if (match === patternMap.size) results.push(windowStart);

    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      if (patternMap.has(leftChar)) {
        if (patternMap.get(leftChar) === 0) match--;
        patternMap.set(leftChar, patternMap.get(leftChar) + 1);
      }
      windowStart++;
    }
  }
  return results;
}

console.log(findStringAnagrams('ppqp', 'pq')); // [1,2]
console.log(findStringAnagrams('abbcabc', 'abc')); // [2,3,4]
