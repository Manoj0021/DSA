//  Find Two Numbers that Add up to "value"

function findSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == value) {
        return arr[i], arr[j];
      }
    }
  }
  return false;
}
console.log(findSum([1, 2, 3, 4], 6));
console.log(findSum([1, 2, 3, 4], 10));
