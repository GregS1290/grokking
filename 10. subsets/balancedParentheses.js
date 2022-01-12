/*

For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

Example 1:

Input: N=2
Output: (()), ()()
Example 2:

Input: N=3
Output: ((())), (()()), (())(), ()(()), ()()()


*/

function balancedParentheses(n) {
  const results = [];
  const currentPath = new Array(n * 2);
  balancedParenthesesHelper(n, 0, 0, currentPath, 0, results);

  return results;
}

function balancedParenthesesHelper(
  num,
  openIdx,
  closeIdx,
  currentPath,
  idx,
  results
) {
  if (openIdx === num && closeIdx === num) {
    results.push(currentPath.join(''));
    return;
  } else {
    if (openIdx < num) {
      currentPath[idx] = '(';
      balancedParenthesesHelper(
        num,
        openIdx + 1,
        closeIdx,
        currentPath,
        idx + 1,
        results
      );
    }

    if (openIdx > closeIdx) {
      currentPath[idx] = ')';
      balancedParenthesesHelper(
        num,
        openIdx,
        closeIdx + 1,
        currentPath,
        idx + 1,
        results
      );
    }
  }
}

console.log(balancedParentheses(3));
