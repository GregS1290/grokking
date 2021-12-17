/*

Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.



*/

function levelOrderTraversal(root) {
  const results = [];
  if (!root) return results;
  const queue = [root];

  while (queue.length) {
    let len = queue.length,
      level = [];

    for (let i = 0; i < len; i++) {
      let current = queue.shift();
      level.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    results.push(level);
  }
  return results;
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

console.log(levelOrderTraversal(root));
