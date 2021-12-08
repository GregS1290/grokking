/*

Given a string, find the length of the longest substring, which has all distinct characters.

Input: String="aabccbb"
Output: 3
Explanation: The longest substring with distinct characters is "abc".

Input: String="abbbb"
Output: 2
Explanation: The longest substring with distinct characters is "ab".

Input: String="abccde"
Output: 3
Explanation: Longest substrings with distinct characters are "abc" & "cde".


*/

function noRepeatSubstring(str) {
  let letterMap = new Map();

  let windowStart = 0,
    maxSubstringLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (!letterMap.has(str[windowEnd])) {
      letterMap.set(str[windowEnd], 1);
    } else {
      letterMap.set(str[windowEnd], letterMap.get(str[windowEnd]) + 1);
    }

    while (letterMap.get(str[windowEnd]) > 1) {
      letterMap.set(str[windowStart], letterMap.get(str[windowStart]) - 1);
      if (letterMap.get(str[windowStart]) === 0)
        letterMap.delete(str[windowStart]);
      windowStart++;
    }

    maxSubstringLength = Math.max(
      maxSubstringLength,
      windowEnd - windowStart + 1
    );
  }

  return maxSubstringLength;
}

function noRepeatSubstringOptimal(str) {
  let windowStart = 0,
    maxLength = 0;

  const charIndexMap = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    // if the map already contains the 'rightChar', shrink the window from the beginning
    // so that we have only one occurrence of 'rightChar'
    if (charIndexMap.has(rightChar)) {
      // this is tricky; in the current window, we will not have any 'rightChar' after
      // its previous index and if 'windowStart' is already ahead of the last index of
      // 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1);
    }

    charIndexMap.set(rightChar, windowEnd);

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log('My Ans');
console.log(noRepeatSubstring('aabccbb')); //3
console.log(noRepeatSubstring('abbbb')); //2
console.log(noRepeatSubstring('abccde')); //3
console.log(noRepeatSubstring('aaaaaaaa')); //1
console.log(noRepeatSubstring('abcdefgab')); //7
console.log(noRepeatSubstring('')); //0

console.log('optimal answer');
console.log(noRepeatSubstringOptimal('aabccbb')); //3
console.log(noRepeatSubstringOptimal('abbbb')); //2
console.log(noRepeatSubstringOptimal('abccde')); //3
console.log(noRepeatSubstringOptimal('aaaaaaaa')); //1
console.log(noRepeatSubstringOptimal('abcdefgab')); //7
console.log(noRepeatSubstringOptimal('')); //0
