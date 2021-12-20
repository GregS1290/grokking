/*

Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.



*/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    //next pointer added for problem
    this.next = null;
  }

  // level order traversal using 'next' pointer
  printLevelOrder() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
}

function connectLevelOrderSiblings(root) {
  if (!root) return null;

  //const results = [];

  const queue = [root];

  // while (queue.length) {
  //   const level = [];
  //   let len = queue.length;

  //   for (let i = 0; i < len; i++) {
  //     const currentNode = queue.shift();
  //     if (currentNode.left) queue.push(currentNode.left);
  //     if (currentNode.right) queue.push(currentNode.right);
  //     level.push(currentNode);
  //   }

  //   for (let j = 0; j < level.length; j++) {
  //     if (j + 1 < level.length) {
  //       level[j].next = level[j + 1];
  //     }
  //   }

  //   results.push(level);
  // }

  while (queue.length) {
    let previousNode = null,
      levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      if (previousNode) {
        previousNode.next = currentNode;
      }
      previousNode = currentNode;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  //return results;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connectLevelOrderSiblings(root);

root.printLevelOrder();
