/*

For ‘K’ employees, we are given a list of intervals representing each employee’s working hours. Our goal is to determine if there is a free interval which is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
Output: [3,5]
Explanation: All the employees are free between [3,5].

Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
Output: [4,6], [8,9]
Explanation: All employees are free between [4,6] and [8,9].

Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
Output: [5,7]
Explanation: All employees are free between [5,7].

*/

function employeeFreeTime(employees) {}

console.log(
  employeeFreeTiime([
    [
      [1, 3],
      [5, 6],
    ],
    [
      [2, 3],
      [6, 8],
    ],
  ])
); // [3,5]

console.log(
  employeeFreeTiime([
    [
      [1, 3],
      [9, 12],
    ],
    [[2, 4]],
    [[6, 8]],
  ])
); // [4,6] [8,9]

console.log(
  employeeFreeTiime([
    [[1, 3]],
    [[2, 4]],
    [
      [3, 5],
      [7, 9],
    ],
  ])
); // [5,7]
