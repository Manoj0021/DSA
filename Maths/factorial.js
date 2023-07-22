function isFact(N) {
  if (N === 0 || N === 1) return 1;

  let res = 1;

  for (let i = 2; i <= N; i++) {
    res = res * i;
  }
  return res;
}

console.log(isFact(5));

// ABOVE SOLUTION IS AN ITERATIVE ONE
// below one is an recursive one

function factorial(N) {
  if (N <= 1) {
    return 1;
  } else {
    return N * factorial(N - 1);
  }
}

console.log(factorial(5));
