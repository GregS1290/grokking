/*


Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.



*/

function tripletSumCloseToTarget(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let currSum = arr[i] + arr[left] + arr[right];
      if (currSum === target) {
        return target;
      } else {
        if (Math.abs(target - currSum) < Math.abs(target - closestSum)) {
          closestSum = currSum;
        }
        if (
          Math.abs(target - currSum - arr[right]) <
          Math.abs(target - currSum - arr[left])
        ) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return closestSum;
}

function tripletSumOptimized(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) {
        // we've found a triplet with an exact sum
        return targetSum - target_diff; // return sum of all the numbers
      }

      if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
        smallest_difference = target_diff; // save the closest difference
      }
      // the second part of the following 'if' is to handle the smallest sum when we
      // have more than one solution
      if (
        Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) &&
          target_diff > smallest_difference)
      ) {
        smallest_difference = target_diff; // save the closest and the biggest difference
      }

      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return targetSum - smallest_difference;
}

console.log(tripletSumCloseToTarget([-2, 0, 1, 2], 2)); // 1

console.log(tripletSumCloseToTarget([-3, -1, 1, 2], 1)); // 0

console.log(tripletSumCloseToTarget([1, 0, 1, 1], 100)); //3
