function permutations(num) {
  const arr = createNumArr(num);
  const results = [];
  permutationsHelper(arr, 0, results);
  return results;
}

function createNumArr(num) {
  const arr = [];

  while (num > 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }

  return arr.reverse();
}

function permutationsHelper(arr, idx, results) {
  if (idx === arr.length) {
    results.push(parseInt(arr.join('')));
    return;
  }

  for (let j = idx; j < arr.length; j++) {
    swap(arr, idx, j);
    permutationsHelper(arr, idx + 1, results);
    swap(arr, idx, j);
  }
}

function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];

  return arr;
}

console.log(permutations(120));
console.log(permutations(201));
console.log(permutations(8675309));
