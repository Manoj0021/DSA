// right rotate an array by n
function rightRotate(arr, n) {
  let rotatedList = [];
  for (let item = arr.length - n; item < arr.length; item++)
    rotatedList.push(arr[item]);
  for (let item = 0; item < arr.length - n; item++) rotatedList.push(arr[item]);
  return rotatedList;
}

console.log(rightRotate([1, 2, 3, 4, 5], 3));

//using javascript methods

function rotateRight(arr, n) {
  return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
}
console.log(rotateRight([1, 2, 3, 4, 5], 3));
