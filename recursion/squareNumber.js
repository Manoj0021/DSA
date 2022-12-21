//(n-1)^2 = n^2 - 2n +  1
// n^2 = (n-1)^2 - 2n + 1
// above is the mathematical formula on which basis we calculate square of the number using recursion
function findSquare(testVariable) {
  // Base case
  if (testVariable == 0) {
    return 0;
  }

  // Recursive case
  else {
    return findSquare(testVariable - 1) + 2 * testVariable - 1;
  }
}

// Driver Code
let testVariable = 5;
console.log(findSquare(testVariable));
