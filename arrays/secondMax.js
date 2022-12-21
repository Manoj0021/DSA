//find the second maximun value in an array
function findSecondMaximum(arr) {
  let max = Number.NEGATIVE_INFINITY;
  let secondmax = Number.NEGATIVE_INFINITY;
  for (let val of arr) {
    if (val > max) {
      secondmax = max;
      max = val;
    } else if (val > secondmax && val != max) secondmax = val;
  }
  return secondmax;
}

console.log(findSecondMaximum([9, 2, 3, 6]));
