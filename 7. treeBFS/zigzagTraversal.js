/*

Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.


*/

function zigzagTraversal(root) {
  const results = [];

  if (!root) return results;

  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    let level = [];

    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      level.push(currentNode.val);
    }

    if (results.length % 2 === 0) {
      results.push(level);
    } else {
      level = level.reverse();
      results.push(level);
    }
  }

  return results;
}

// OPTIMAL APPROACH --> Use a boolean, push or unshift the current node in the level depending on if youre going left to right or right to left

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const root2 = new TreeNode(12);
root2.left = new TreeNode(7);
root2.right = new TreeNode(1);
root2.left.left = new TreeNode(9);
root2.right.left = new TreeNode(10);
root2.right.right = new TreeNode(5);
root2.right.left.left = new TreeNode(20);
root2.right.left.right = new TreeNode(17);

console.log(zigzagTraversal(root));

console.log(zigzagTraversal(root2));
