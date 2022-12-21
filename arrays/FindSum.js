//  Find Two Numbers that Add up to "value"

//the below solution is written using brute-force method

function findSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == value) {
        return [arr[i], arr[j]];
      }
    }
  }
  return false;
}
console.log(findSum([1, 2, 3, 4], 6));
console.log(findSum([1, 2, 3, 4], 10));

// the below solution is written using the method moving indices

function findSum(arr, value) {
  arr.sort(function (a, b) {
    return a - b;
  });

  // first the array will be sorted

  let index1 = 0,
    index2 = arr.length - 1,
    result = [],
    sum = 0;

  while (index1 != index2) {
    sum = arr[index1] + arr[index2];

    if (sum < value) {
      index1++;
    } else if (sum > value) {
      index2--;
    } else {
      result.push(arr[index1]);
      result.push(arr[index2]);
      return result;
    }
  }
  return false;
}

console.log(findSum([1, 2, 3, 4], 5));
console.log(findSum([1, 2, 3, 4], 10));

//In this solution, we will first sort the array. Then we will use two variables, one starting from the first index of the array and second from size-1 index of the array. If the sum of the elements on these indexes of the array is smaller than given value then increment index from the start else decrement index from the end, until the given value is not equal to the sum. Store the elements on these indexes in result array and return it.
