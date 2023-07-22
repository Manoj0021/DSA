function countDigits(x) {
  let res = 0;
  while (x > 0) {
    x = Math.floor(x / 10);
    res++;
  }
  return res;
}

console.log(countDigits(1235234));
