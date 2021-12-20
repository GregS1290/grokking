/*

Given a binary tree, populate an array to represent the averages of all of its levels.




*/

function levelAveragesInBinaryTree(root) {
  const results = [];
  if (!root) return results;

  const queue = [root];

  while (queue.length) {
    let len = queue.length,
      sum = 0;

    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      sum += currentNode.val;
    }

    results.push(sum / len);
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

console.log(levelAveragesInBinaryTree(root));
console.log(levelAveragesInBinaryTree(root2));
