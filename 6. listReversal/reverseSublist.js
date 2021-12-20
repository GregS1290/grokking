/*
Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

ex: 1 -> 2 -> 3 -> 4 -> 5 -> null p = 2, q = 4

1 -> 4 -> 3 -> 2 -> 5 -> null

The problem follows the In-place Reversal of a LinkedList pattern. We can use a similar approach as discussed in Reverse a LinkedList. Here are the steps we need to follow:

Skip the first p-1 nodes, to reach the node at position p.
Remember the node at position p-1 to be used later to connect with the reversed sub-list.
Next, reverse the nodes from p to q using the same approach discussed in Reverse a LinkedList.
Connect the p-1 and q+1 nodes to the reversed sub-list.

*/

function reverseSublist(head, p, q) {
  if (p === q) return head;

  // after skipping 'p-1' nodes, current will point to 'p'th node
  let current = head,
    previous = null;
  let i = 0;
  while (current !== null && i < p - 1) {
    previous = current;
    current = current.next;
    i += 1;
  }

  // we are interested in three parts of the LinkedList, the part before index 'p',
  // the part between 'p' and 'q', and the part after index 'q'
  const last_node_of_first_part = previous;
  // after reversing the LinkedList 'current' will become the last node of the sub-list
  const last_node_of_sub_list = current;
  let next = null; // will be used to temporarily store the next node

  i = 0;

  // reverse nodes between 'p' and 'q'
  while (current !== null && i < q - p + 1) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i += 1;
  }

  // connect with the first part
  if (last_node_of_first_part !== null) {
    // 'previous' is now the first node of the sub-list
    last_node_of_first_part.next = previous;
    // this means p === 1 i.e., we are changing the first node (head) of the LinkedList
  } else {
    head = previous;
  }

  // connect with the last part
  last_node_of_sub_list.next = current;
  return head;
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  printList() {
    let head = this;
    let results = [];
    while (head) {
      results.push(head.value);
      head = head.next;
    }
    return results;
  }
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(head.printList());
const result = reverseSublist(head, 2, 4);
console.log(result.printList());
