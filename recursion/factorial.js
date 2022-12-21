function factorial(targetNumber) {
  // Base case
  if (targetNumber <= 1) {
    return 1;
  }
  // recursive case
  else {
    return targetNumber * factorial(targetNumber - 1);
  }
}

let targetNumber = 5;
let result = factorial(targetNumber);
console.log(result);
