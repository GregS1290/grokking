/*
Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.

Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into
one [1,5].

Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.

*/

function mergeIntervals(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  const stack = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let currInterval = intervals[i];

    let prevInterval = stack[stack.length - 1];

    if (
      prevInterval[0] <= currInterval[0] &&
      prevInterval[1] >= currInterval[1]
    ) {
      continue;
    } else if (prevInterval[1] >= currInterval[0]) {
      prevInterval[1] = currInterval[1];
      continue;
    } else {
      stack.push(currInterval);
    }
  }

  return stack;
}

console.log(
  mergeIntervals([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
); //[[1,5], [7,9]]

console.log(
  mergeIntervals([
    [6, 7],
    [2, 4],
    [5, 9],
  ])
); // [[2,4], [5,9]]

console.log(
  mergeIntervals([
    [1, 4],
    [2, 6],
    [3, 5],
  ])
); // [[1,6]]
