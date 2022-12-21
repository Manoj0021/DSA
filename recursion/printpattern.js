function printPattern(targetNumber) {
  // base case
  if (targetNumber <= 0) {
    console.log(targetNumber);
    return;
  }
  // recursive call
  console.log(targetNumber);

  printPattern(targetNumber - 5);

  console.log(targetNumber);
}

let n = 10;
printPattern(n);
