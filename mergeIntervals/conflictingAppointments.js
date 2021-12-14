/*
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.

Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.


Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.


*/

function conflictingAppointments(appointments) {
  appointments = appointments.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < appointments.length; i++) {
    // please note the comparison above, it is "<" and not "<="
    // while merging we needed "<=" comparison, as we will be merging the two
    // intervals having condition "intervals[i][start] === intervals[i - 1][end]" but
    // such intervals don't represent conflicting appointments as one starts right
    // after the other
    if (appointments[i][0] < appointments[i - 1][1]) return false;
  }
  return true;
}

console.log(
  conflictingAppointments([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
); // false

console.log(
  conflictingAppointments([
    [6, 7],
    [2, 4],
    [8, 12],
  ])
); //true

console.log(
  conflictingAppointments([
    [4, 5],
    [2, 3],
    [3, 6],
  ])
); //false
