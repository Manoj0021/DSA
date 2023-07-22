function isPal(n) {
  let rev = 0;
  let temp = n;

  while (temp !== 0) {
    let ld = temp % 10;
    rev = rev * 10 + ld;
    temp = Math.floor(temp / 10);
  }
  return rev === n;
}

console.log(isPal(1211));
