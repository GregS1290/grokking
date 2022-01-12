/*

Given a string, find all of its permutations preserving the character sequence but changing case.

Example 1:

Input: "ad52"
Output: "ad52", "Ad52", "aD52", "AD52"
Example 2:

Input: "ab7c"
Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"


*/

function letterCasePermutation(str) {
  const results = [];

  letterCaseHelper(str, 0, [], results);

  return results;
}

function letterCaseHelper(str, idx, currentPath, results) {
  if (idx === str.length) {
    results.push(currentPath.join(''));
    return;
  }

  if (str.charCodeAt(idx) >= 49 && str.charCodeAt(idx) <= 57) {
    currentPath.push(str[idx]);
    letterCaseHelper(str, idx + 1, currentPath, results);
    currentPath.pop();
  } else {
    currentPath.push(str[idx].toLowerCase());
    letterCaseHelper(str, idx + 1, currentPath, results);
    currentPath.pop();
    currentPath.push(str[idx].toUpperCase());
    letterCaseHelper(str, idx + 1, currentPath, results);
    currentPath.pop();
  }
}

// 0 49 9 57

console.log(letterCasePermutation('ad52')); // "ad52", "Ad52", "aD52", "AD52"
console.log(letterCasePermutation('ab7c')); // "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"
