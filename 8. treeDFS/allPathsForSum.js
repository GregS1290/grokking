/*

Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.


*/

function allPathsForSum(root, sum) {
  const allPaths = [];

  findPathsRecursive(root, sum, [], allPaths);

  return allPaths;
}

function findPathsRecursive(currentNode, sum, currentPath, allPaths) {
  if (!currentNode) {
    return;
  }

  //add currentNode to Path
  currentPath.push(currentNode.val);

  // if the current node is a leaf and its value is equal to sum, save the current path
  if (currentNode.val === sum && !currentNode.left && !currentNode.right) {
    //console.log(currentPath);
    allPaths.push(currentPath);
  } else {
    // traverse the left sub-tree
    findPathsRecursive(
      currentNode.left,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
    // traverse the right sub-tree
    findPathsRecursive(
      currentNode.right,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
  }

  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack.
  currentPath.pop();
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23,
  result = allPathsForSum(root, sum);

process.stdout.write(`Tree paths with sum ${sum}: `);
for (i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}
