/*

Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.

Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists.


*/

function intervalsIntersection(arr1, arr2) {
  let i = 0,
    j = 0;
  const intersection = [];

  while (i < arr1.length && j < arr2.length) {
    // check if intervals overlap and intervals_a[i]'s start time lies within the
    // other intervals_b[j]
    let oneOverlapsTwo = arr1[i][0] >= arr2[j][0] && arr1[i][0] <= arr2[j][1];

    // check if intervals overlap and intervals_a[j]'s start time lies within the
    // other intervals_b[i]
    let twoOverlapsOne = arr2[j][0] >= arr1[i][0] && arr2[j][0] <= arr1[i][1];

    // store the the intersection part
    if (oneOverlapsTwo || twoOverlapsOne) {
      intersection.push([
        Math.max(arr1[i][0], arr2[j][0]),
        Math.min(arr1[i][1], arr2[j][1]),
      ]);
    }

    if (arr1[i][1] < arr2[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return intersection;
}

console.log(
  intervalsIntersection(
    [
      [1, 3],
      [5, 6],
      [7, 9],
    ],
    [
      [2, 3],
      [5, 7],
    ]
  )
); //[2, 3], [5, 6], [7, 7]

console.log(
  intervalsIntersection(
    [
      [1, 3],
      [5, 7],
      [9, 12],
    ],
    [[5, 10]]
  )
); // [5, 7], [9, 10]
