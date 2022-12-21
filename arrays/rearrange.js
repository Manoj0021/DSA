// rearrange positive and negativenumbers in an array
function reArrange(arr) {
  let neg = [];
  let pos = [];
  for (let ele of arr) {
    if (ele < 0) neg.push(ele);
    else pos.push(ele);
  }
  return neg.concat(pos);
}

console.log(reArrange([10, -1, 20, 4, 5, -9, -6]));
