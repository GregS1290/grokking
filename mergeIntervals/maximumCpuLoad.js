/*

We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any time if all the jobs are running on the same machine.

Jobs: [[1,4,3], [2,5,4], [7,9,6]]
Output: 7
Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the
jobs are running at the same time i.e., during the time interval (2,4).

Jobs: [[6,7,10], [2,4,11], [8,12,15]]
Output: 15
Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.

Jobs: [[1,4,2], [2,4,1], [3,6,5]]
Output: 8
Explanation: Maximum CPU load will be 8 as all jobs overlap during the time interval [3,4].


*/

function maximumCpuLoad(jobs) {
  jobs = jobs.sort((a, b) => a[0] - b[0]);
  let maxLoad = 0;
  const heap = new Heap();

  for (let i = 0; i < jobs.length; i++) {
    //remove ALL tasks that are not within the same window as the current task
    while (heap.size && jobs[i][0] > heap.peek()[1]) {
      heap.extract();
    }
    //add current task
    heap.insert(jobs[i]);
    //calc CPU load
    maxLoad = Math.max(heap.totalLoad(), maxLoad);
  }
  return maxLoad;
}

// since JS does not have a native heap,
// for an interview you can quickly code-up something like this
// letting interviewer know what you are doing
class Heap {
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

  totalLoad() {
    let load = 0;
    if (this.size > 0) {
      this.heap.forEach((task) => (load += task[2]));
    }
    return load;
  }
}

console.log(
  maximumCpuLoad([
    [1, 4, 3],
    [2, 5, 4],
    [7, 9, 6],
  ])
); // 7

console.log(
  maximumCpuLoad([
    [6, 7, 10],
    [2, 4, 11],
    [8, 12, 15],
  ])
); // 15

console.log(
  maximumCpuLoad([
    [1, 4, 2],
    [2, 4, 1],
    [3, 6, 5],
  ])
); // 8
