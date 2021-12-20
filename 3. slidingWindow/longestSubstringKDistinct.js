/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

*/

function longestSubstringKDistinct(str, k) {
  const letterMap = new Map();

  let windowStart = 0,
    maxLength = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    if (!letterMap.has(str[windowEnd])) {
      letterMap.set(str[windowEnd], 1);
    } else {
      letterMap.set(str[windowEnd], letterMap.get(str[windowEnd]) + 1);
    }

    while (letterMap.size > k) {
      const leftChar = str[windowStart];
      letterMap.set(leftChar, letterMap.get(leftChar) - 1);
      if (letterMap.get(leftChar) === 0) letterMap.delete(leftChar);
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(longestSubstringKDistinct('araaci', 2)); //4
console.log(longestSubstringKDistinct('araaci', 1)); //2
console.log(longestSubstringKDistinct('cbbebi', 3)); //5
