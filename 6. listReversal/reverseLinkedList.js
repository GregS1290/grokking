/*

Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.


*/

function reverseLinkedList(head) {
  let prev = null,
    curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
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
let results = reverseLinkedList(head);
console.log(results.printList());
