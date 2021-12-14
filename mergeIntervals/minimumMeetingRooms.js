/*
Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can
occur in any of the two rooms later.

Meetings: [[6,7], [2,4], [8,12]]
Output: 1
Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.

Meetings: [[1,4], [2,3], [3,6]]
Output:2
Explanation: Since [1,4] overlaps with the other two meetings [2,3] and [3,6], we need two rooms to
hold all the meetings.

Meetings: [[4,5], [2,3], [2,4], [3,5]]
Output: 2
Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].


*/

function minimumMeetingRooms(meetings) {
  meetings = meetings.sort((a, b) => a[0] - b[0]);

  let minRooms = 0,
    minHeap = new MinHeap();

  for (let i = 0; i < meetings.length; i++) {
    while (minHeap.size && meetings[i][0] >= minHeap.peek()[1]) {
      console.log(minHeap.peek());
      minHeap.extract();
    }
    minHeap.insert(meetings[i]);

    minRooms = Math.max(minRooms, minHeap.size);
  }
  return minRooms;
}

// since JS does not have a native heap,
// for an interview you can quickly code-up something like this
// letting interviewer know what you are doing
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => b[1] - a[1]);
  }

  extract() {
    if (this.size === 0) return null;
    return this.heap.shift();
  }

  peek() {
    if (this.size === 0) return null;
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }
}

console.log(
  minimumMeetingRooms([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
); //2

console.log(
  minimumMeetingRooms([
    [6, 7],
    [2, 4],
    [8, 12],
  ])
); //1

console.log(
  minimumMeetingRooms([
    [1, 4],
    [2, 3],
    [3, 6],
  ])
); //2

console.log(
  minimumMeetingRooms([
    [4, 5],
    [2, 3],
    [2, 4],
    [3, 5],
  ])
); //2
