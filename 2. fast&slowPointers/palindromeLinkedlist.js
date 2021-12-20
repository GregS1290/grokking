/*
Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true

Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false


APPROACH
We can use the Fast & Slow pointers method similar to Middle of the LinkedList to find the middle node of the LinkedList.

Once we have the middle of the LinkedList, we will reverse the second half.

Then, we will compare the first half with the reversed second half to see if the LinkedList represents a palindrome.

Finally, we will reverse the second half of the LinkedList again to revert and bring the LinkedList back to its original form.
*/

function palindromeLinkedlist(head) {
  if (!head || !head.next) return true;

  let fast = head,
    slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let headSecondHalf = reverseList(slow);

  let copyOfSecondHalf = headSecondHalf;

  while (head && headSecondHalf) {
    if (head.value !== headSecondHalf.value) {
      break;
    }
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  reverseList(copyOfSecondHalf);

  if (!head && !headSecondHalf) return true;

  return false;
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
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);

const head2 = new Node(2);
head2.next = new Node(4);
head2.next.next = new Node(6);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(2);
head2.next.next.next.next.next = new Node(2);

console.log(palindromeLinkedlist(head)); // true
console.log(palindromeLinkedlist(head2)); // false
