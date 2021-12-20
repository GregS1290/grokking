/*

Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.



*/

function minDepthOfBinaryTree(root) {
  let minDepth = 0;

  if (!root) return minDepth;

  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    minDepth++;
    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();

      //to be a leaf, it has to have no left and right. Dont forget!
      if (!currentNode.left && !currentNode.right) return minDepth;

      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return minDepth;
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
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Minimum Depth: ${minDepthOfBinaryTree(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(`Tree Minimum Depth: ${minDepthOfBinaryTree(root)}`);
