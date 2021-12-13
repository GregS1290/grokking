/*

Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

ex: 1 -> 2 -> 3 -> 4 -> 5 -> 6
              |<-------------|


APPROACH

Take two pointers. Let’s call them pointer1 and pointer2.

Initialize both pointers to point to the start of the LinkedList.

We can find the length of the LinkedList cycle using the approach discussed in  LinkedList Cycle. Let’s assume that the length of the cycle is ‘K’ nodes.

Move pointer2 ahead by ‘K’ nodes.

Now, keep incrementing pointer1 and pointer2 until they both meet.

As pointer2 is ‘K’ nodes ahead of pointer1, which means, pointer2 must have completed one loop in the cycle when both pointers meet. Their meeting point will be the start of the cycle.


*/

function findCycle(head) {
  if (!head) return false;

  let slow = head,
    fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return calculateCycleLength(slow);
  }
  return 0;
}

function calculateCycleLength(slow) {
  let current = slow,
    cycleLength = 0;

  while (true) {
    current = current.next;
    cycleLength += 1;
    if ((current = slow)) break;
  }

  return cycleLength;
}

function findCycleStart(head) {
  if (!head) return false;

  let cycleLen = findCycle(head);

  let p1 = head,
    p2 = head;

  while (cycleLen > 0) {
    p2 = p2.next;
    cycleLen--;
  }

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}
