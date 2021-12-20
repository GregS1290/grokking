/*

Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].

Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].



*/

function insertInterval(intervals, newInterval) {
  const stack = [];
  let i = 0;
  // skip and add to output) all intervals that come before the 'new_interval'
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    stack.push(intervals[i]);
    i++;
  }
  // merge all intervals that overlap with 'new_interval'
  while (i < intervals.length && intervals[i][0] < newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }

  //insert New Interval
  stack.push(newInterval);

  //insert the rest of the intervals
  while (i < intervals.length) {
    stack.push(intervals[i]);
    i++;
  }

  return stack;
}

console.log(
  insertInterval(
    [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    [4, 6]
  )
); // [[1,3], [4,7], [8,12]]

console.log(
  insertInterval(
    [
      [1, 3],
      [5, 7],
      [8, 12],
    ],
    [4, 10]
  )
); // [[1,3], [4,12]]

console.log(
  insertInterval(
    [
      [2, 3],
      [5, 7],
    ],
    [1, 4]
  )
); // [[1,4], [5,7]]
