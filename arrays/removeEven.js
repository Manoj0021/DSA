function removeEven(arr) {
  let newArr = [];
  for (let number of arr) {
    if (number % 2 !== 0) {
      newArr.push(number);
    }
  }
  return newArr;
}

console.log(removeEven([3, 2, 41, 3, 34]));

// this has time complexity of O(n)

// this below solution is written using filter and lambda function and the time complexity is the same as the above function

function NewRemove(arr) {
  return arr.filter((v) => v % 2 !== 0);
}

console.log(NewRemove([3, 2, 41, 3, 34]));
