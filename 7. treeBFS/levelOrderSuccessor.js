/*

Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

*/

function levelOrderSuccessor(root, node) {
  const results = [];

  if (!root) return 'no root given';

  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      level.push(currentNode.val);
    }
    results.push(...level);
  }
  console.log(results);

  for (let i = 0; i < results.length; i++) {
    let nodeVal = results[i];
    if (nodeVal === node && i + 1 < results.length) {
      return results[i + 1];
    } else {
      return -1;
    }
  }
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let result = levelOrderSuccessor(root, 12);
if (result) {
  console.log(result);
}
result = levelOrderSuccessor(root, 9);
if (result) {
  console.log(result);
}
