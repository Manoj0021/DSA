function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeArrays([4, 5, 6], [-2, -1, 0, 7]));
