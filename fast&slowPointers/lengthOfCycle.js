/*

Problem 1: Given the head of a LinkedList with a cycle, find the length of the cycle.

APPROACH: We can use the above solution to find the cycle in the LinkedList. Once the fast and slow pointers meet, we can save the slow pointer and iterate the whole cycle with another pointer until we see the slow pointer again to find the length of the cycle.
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
