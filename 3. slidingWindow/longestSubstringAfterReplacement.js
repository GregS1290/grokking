/*
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".


*/

function lengthOfLongestSubstring(str, k) {
  let maxLength = 0,
    windowStart = 0,
    maxRepeatLetterCount = 0;

  const letterMap = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (!letterMap.has(rightChar)) {
      letterMap.set(rightChar, 0);
    }
    letterMap.set(rightChar, letterMap.get(rightChar) + 1);

    //checking frequency of current letter
    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      letterMap.get(rightChar)
    );

    // current window size is from windowStart to windowEnd, overall we have a letter
    // which is repeating 'maxRepeatLetterCount' times, this means we can have a window
    //  which has one letter repeating 'maxRepeatLetterCount' times and the remaining
    // letters we should replace. If the remaining letters are more than 'k', it is the
    // time to shrink the window as we are not allowed to replace more than 'k' letters
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      letterMap.set(str[windowStart], letterMap.get(str[windowStart]) - 1);
      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('aabccbb', 2)); //5
console.log(lengthOfLongestSubstring('abbcb', 1)); //4
console.log(lengthOfLongestSubstring('abccde', 1)); //3

/*
maxlength = 5
maxrepeatingcount = 3
k 2

0 1 2 3 4 5 6
a a b c c b b

    s
            e

  if(e - s + 1 - mrlc > k) // 2
  set map[s] - 1
  s=+

map {
  a: 0
  b: 3
  c: 2
}

*/
