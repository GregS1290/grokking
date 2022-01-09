/*

Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.

A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. The path must contain at least one node.

*/

function pathWithMaxSum(root) {
  let maxSum = 0;

  function helper(node) {
    if (!node) return 0;

    let maxSumLeft = helper(node.left);
    let maxSumRight = helper(node.right);

    maxSumLeft = Math.max(maxSumLeft, 0);
    maxSumRight = Math.max(maxSumRight, 0);

    maxSum = Math.max(maxSum, maxSumLeft + maxSumRight);
  }
}
