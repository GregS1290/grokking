/*
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Input: Fruit = ['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']


*/

function maxFruitCountOf2Types(arr) {
  const basket = new Map();

  let windowStart = 0,
    maxFruits = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (!basket.has(arr[windowEnd])) {
      basket.set(arr[windowEnd], 1);
    } else {
      basket.set(arr[windowEnd], basket.get(arr[windowEnd]) + 1);
    }

    while (basket.size > 2) {
      basket.set(arr[windowStart], basket.get(arr[windowStart]) - 1);
      if (basket.get(arr[windowStart]) === 0) basket.delete(arr[windowStart]);
      windowStart++;
    }

    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }

  return maxFruits;
}

console.log(maxFruitCountOf2Types(['A', 'B', 'C', 'A', 'C'])); //3
console.log(maxFruitCountOf2Types(['A', 'B', 'C', 'B', 'B', 'C'])); //5
