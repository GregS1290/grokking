/*
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters, it will have n! permutations.

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.
*/

function findPermutation(str, pattern) {
  let windowStart = 0,
    windowLen = pattern.length;

  const patternMap = new Map();
  const strMap = new Map();

  for (let letter of pattern) {
    if (!patternMap.has(letter)) patternMap.set(letter, 0);

    patternMap.set(letter, patternMap.get(letter) + 1);
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const currLetter = str[windowEnd];
    if (!strMap.has(currLetter)) strMap.set(currLetter, 0);

    strMap.set(currLetter, strMap.get(currLetter) + 1);

    if (windowEnd - windowStart + 1 === windowLen) {
      if (compareMaps(strMap, patternMap) === true) {
        return true;
      }
      let leftChar = str[windowStart];
      strMap.set(leftChar, strMap.get(leftChar) - 1);
      if (strMap.get(leftChar) === 0) strMap.delete(leftChar);
      windowStart++;
    }
  }

  return false;
}

function compareMaps(stringMap, patternMap) {
  for (const [letter, freq] of stringMap) {
    if (!patternMap.has(letter)) return false;

    if (patternMap.get(letter) !== freq) return false;
  }

  return true;
}

function findPermutationOptimal(str, pattern) {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};

  //build pattern map
  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  // Our goal is to match all the characters from the 'charFrequency' with the current
  // window try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      return true;
    }

    // Shrink the sliding window
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return false;
}

console.log(findPermutation('oidbcaf', 'abc')); //true
console.log(findPermutation('odicf', 'dc')); //false
console.log(findPermutation('bcdxabcdy', 'bcdyabcdx')); //true
console.log(findPermutation('aaacb', 'abc')); //true
