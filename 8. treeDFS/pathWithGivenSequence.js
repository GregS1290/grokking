/*

Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

*/

function pathWithGivenSequence(root, sequence) {
  if (!root) return sequence.length === 0;
  return findPathRecursive(root, sequence, 0);
}

function findPathRecursive(currentNode, sequence, index) {
  if (!currentNode) return false;

  if (sequence[index] !== currentNode.val || index >= sequence.length)
    return false;

  if (
    !currentNode.left &&
    !currentNode.right &&
    index === sequence.length - 1
  ) {
    return true;
  }

  return (
    findPathRecursive(currentNode.left, sequence, index + 1) ||
    findPathRecursive(currentNode.right, sequence, index + 1)
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

console.log(
  `Tree has path sequence: ${pathWithGivenSequence(root, [1, 0, 7])}`
);
console.log(
  `Tree has path sequence: ${pathWithGivenSequence(root, [1, 1, 6])}`
);
