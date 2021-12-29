/*

Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

*/

function pathWithGivenSequence(root, sequence) {
  if (!root) return sequence.length === 0;

  return findPathRecursive(root, sequence, 0);
}

function findCurrentPath(currentNode, currentPath, pathNum) {
  if (!currentNode) return;

  currentPath.push(currentNode.val);

  if (!currentNode.left && !currentNode.right) {
    let currentNum = currentPath.join('');
    currentPath.pop();
    return currentNum === pathNum;
  } else {
    return (
      findCurrentPath(currentNode.left, currentPath, pathNum) ||
      findCurrentPath(currentNode.right, currentPath, pathNum)
    );
  }
}

//OPTIMAL HELPER

function findPathRecursive(currentNode, sequence, sequenceIndex) {
  if (currentNode === null) {
    return false;
  }

  const seqLen = sequence.length;
  if (sequenceIndex >= seqLen || currentNode.val !== sequence[sequenceIndex]) {
    return false;
  }

  // if the current node is a leaf, add it is the end of the sequence, we have found
  // a path!
  if (
    currentNode.left === null &&
    currentNode.right === null &&
    sequenceIndex === seqLen - 1
  ) {
    return true;
  }

  // recursively call to traverse the left and right sub-tree
  // return true if any of the two recursive call return true
  return (
    findPathRecursive(currentNode.left, sequence, sequenceIndex + 1) ||
    findPathRecursive(currentNode.right, sequence, sequenceIndex + 1)
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
