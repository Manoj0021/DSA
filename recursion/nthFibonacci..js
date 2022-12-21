// iterative method
function fibonacci(testVariable) {
  let fn0 = 0;
  let fn1 = 1;

  for (let i = 0; i < testVariable; i++) {
    var temp = fn0 + fn1;

    // Setting variables for next iteration
    fn0 = fn1;
    fn1 = temp;
  }
  return fn0;
}

// Driver Code
var testVariable = 7;
console.log(fibonacci(testVariable));

// recursive method

function fibonacci(testVariable) {
  // Base case
  if (testVariable <= 1) {
    return testVariable;
  }

  // Recursive case
  return fibonacci(testVariable - 1) + fibonacci(testVariable - 2);
}

// Driver Code
var testVariable = 7;
console.log(fibonacci(testVariable));
