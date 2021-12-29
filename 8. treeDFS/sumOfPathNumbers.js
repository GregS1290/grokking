/*
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.



*/

function sumOfPathNumbers(root) {
  let totalSum = [];

  findSumOfPath(root, 0, totalSum);

  return totalSum.reduce((sum, acc) => sum + acc);
}

function findSumOfPath(currentNode, currentSum, totalSum) {
  if (!currentNode) return;

  currentSum = currentSum * 10 + currentNode.val;

  if (!currentNode.left && !currentNode.right) {
    totalSum.push(currentSum);
  } else {
    findSumOfPath(currentNode.left, currentSum, totalSum);

    findSumOfPath(currentNode.right, currentSum, totalSum);
  }

  currentSum = (currentSum - currentNode.val) / 10;
}

//OPTIMAL HELPER FUNC

function findRootToLeafPathNumbers(currentNode, pathSum) {
  if (currentNode === null) {
    return 0;
  }

  // calculate the path number of the current node
  pathSum = 10 * pathSum + currentNode.val;

  // if the current node is a leaf, return the current path sum
  if (currentNode.left === null && currentNode.right === null) {
    return pathSum;
  }

  // traverse the left and the right sub-tree
  return (
    findRootToLeafPathNumbers(currentNode.left, pathSum) +
    findRootToLeafPathNumbers(currentNode.right, pathSum)
  );
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(sumOfPathNumbers(root));
