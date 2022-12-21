function printNaturalNumbers(lowerRange, upperRange) {
  // Base case
  if (lowerRange > upperRange) {
    return;
  }
  console.log(lowerRange);

  // Recursive case
  printNaturalNumbers(lowerRange + 1, upperRange);
}

// Driver Code
let n = 5;
printNaturalNumbers(1, n);

// the above function is an example of direct recursion

// the one below is an example of indirect recursion

function printNaturalNumbers(lowerRange, upperRange) {
  if (lowerRange <= upperRange) {
    console.log(lowerRange);
    lowerRange += 1;
    helperFunction(lowerRange, upperRange);
  } else {
    return;
  }
}

function helperFunction(lowerRange, upperRange) {
  if (lowerRange <= upperRange) {
    console.log(lowerRange);
    lowerRange += 1;
    printNaturalNumbers(lowerRange, upperRange);
  } else {
    return;
  }
}

// Driver Program
let no = 5;
printNaturalNumbers(1, no);
