/*


Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.


*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    //next pointer added for problem
    this.next = null;
  }
  // tree traversal using 'next' pointer
  printTree() {
    process.stdout.write("Traversal using 'next' pointer: ");
    let current = this;
    while (current !== null) {
      process.stdout.write(`${current.val} `);
      current = current.next;
    }
  }
}

function connectAllLevelOrderSiblings(root) {
  if (!root) return null;

  const queue = [root];
  let prevNode = null,
    currentNode = null;
  while (queue.length) {
    currentNode = queue.shift();
    if (prevNode) {
      prevNode.next = currentNode;
    }
    prevNode = currentNode;

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connectAllLevelOrderSiblings(root);
root.printTree();
