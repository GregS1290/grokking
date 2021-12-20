/*

Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order.
So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null,
your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input LinkedList should be modified in-place.

Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null

Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
Output: 2 -> 10 -> 4 -> 8 -> 6 -> null


approach - fast and slow pointer

find middle

reverse from middle to end

start from head and head of reversed list

insert node from reversed list in between nodes of main list

return head of main list
*/

function rearrangeLinkedlist(head) {
  if (!head || head.next) return;

  let fast = head,
    slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let headSecondHalf = reverseList(slow);
  let headFirstHalf = head;

  while (headFirstHalf && headSecondHalf) {
    let temp = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp;

    let temp2 = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp2;
  }

  // set the next of the last node to 'null'
  if (headFirstHalf) {
    headFirstHalf.next = null;
  }

  return h1;
}

function reverseList(head) {
  let prev = null,
    next;

  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  printList() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);

const head2 = new Node(2);
head2.next = new Node(4);
head2.next.next = new Node(6);
head2.next.next.next = new Node(8);
head2.next.next.next.next = new Node(10);

rearrangeLinkedlist(head); // 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null
head.printList();
rearrangeLinkedlist(head2); // 2 -> 10 -> 4 -> 8 -> 6 -> null
head2.printList();
