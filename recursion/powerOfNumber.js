function power(base, exponent) {
  // Base case
  if (exponent == 0) {
    return 1;
  }

  // Recursive case
  else {
    return base * power(base, exponent - 1);
  }
}

// Driver Code
console.log(power(2, 3));
