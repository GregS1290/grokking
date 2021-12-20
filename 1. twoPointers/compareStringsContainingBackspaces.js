/*
Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.


Input: str1="xy#z", str2="xzz#"
Output: true
Explanation: After applying backspaces the strings become "xz" and "xz" respectively.


Input: str1="xy#z", str2="xyz#"
Output: false
Explanation: After applying backspaces the strings become "xz" and "xy" respectively.


Input: str1="xp#", str2="xyz##"
Output: true
Explanation: After applying backspaces the strings become "x" and "x" respectively.
In "xyz##", the first '#' removes the character 'z' and the second '#' removes the character 'y'.


Input: str1="xywrrmp", str2="xywrrmu#p"
Output: true
Explanation: After applying backspaces the strings become "xywrrmp" and "xywrrmp" respectively.


*/

/*
APPROACH 1 => Stacks Time and Space O M + N

Approach 2 (Optimal) 2 pointers

To compare the given strings, first, we need to apply the backspaces. An efficient way to do this would be from the end of both the strings. We can have separate pointers, pointing to the last element of the given strings. We can start comparing the characters pointed out by both the pointers to see if the strings are equal. If, at any stage, the character pointed out by any of the pointers is a backspace (’#’), we will skip and apply the backspace until we have a valid character available for comparison.


*/
function compareStringsContainingBackspaces(str1, str2) {
  return processBackspaces(str1) === processBackspaces(str2);
}

function processBackspaces(str) {
  const stack = [];

  for (let char of str) {
    if (char === '#') {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

//OPTIMAL Time O M + n Space O 1

function backspaceCompare(str1, str2) {
  let index1 = str1.length - 1,
    index2 = str2.length - 1;

  while (index1 >= 0 || index2 >= 0) {
    let i1 = getNextValidChar(str1, index1),
      i2 = getNextValidChar(str2, index2);

    if (i1 < 0 && i2 < 0) {
      //reached end of both strings
      return true;
    }

    if (i1 < 0 || i2 < 0) {
      //only one of them ended
      return false;
    }

    if (str1[i1] !== str2[i2]) {
      //if at any point the characters arent equal, exit early
      return false;
    }
    index1 = i1 -= 1;
    index2 = i2 -= 1;
  }

  return true;
}

function getNextValidChar(str, index) {
  let backspaceCount = 0;

  while (index >= 0) {
    if (str[index] === '#') {
      backspaceCount++;
    } else if (backspaceCount > 0) {
      backspaceCount--;
    } else {
      break;
    }

    index--; //skip a backspace or valid char
  }

  return index;
}

console.log(backspaceCompare('xy#z', 'xzz#')); //true

console.log(backspaceCompare('xy#z', 'xyz#')); //false

console.log(backspaceCompare('xp#', 'xyz##')); //true

console.log(backspaceCompare('xywrrmp', 'xywrrmu#p')); //true
