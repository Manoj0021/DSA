//using javascript sort method
// the time complexity of this method is O(nlogn)

function findMin(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}
console.log(findMin([1, -1, 3, 4, 5]));

//implementing our own sort function

function findMinimum(arr) {
  let currentMin = arr[0];
  //At every Index compare its value with current minimum
  //and if its less, then make that index value the new minimum value
  for (let val of arr) {
    if (val < currentMin) currentMin = val;
  }

  return currentMin;
}

console.log(findMinimum([9, 2, 3, 6]));
