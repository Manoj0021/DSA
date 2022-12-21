function isVowel(character) {
  // function to check whether input character is a vowel
  let variable = character.toLowerCase(); // convert character to lower case so upper cases can also be handled
  let vowels = 'aeiou'; // string containing all vowels

  if (vowels.indexOf(variable) != -1) {
    // check if given character is in vowels
    return true;
  } else {
    return false;
  }
}

function countVowels(string, stringLength) {
  //function that returns the count of vowels
  // Base case
  if (stringLength == 1) {
    return Number(isVowel(string[0]));
    //Number() is a function in js that returns a number on the basis of the condition is true or false;
  }

  // Recursive case
  return (
    countVowels(string, stringLength - 1) + isVowel(string[stringLength - 1])
  );
}

// Driver code
let string = 'Educative';
console.log(countVowels(string, string.length));

// ITERATIVE METHOD

function countVowels(string) {
  // function that returns the count of vowels
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      // check if character is vowel
      count += 1;
    }
  }
  return count;
}

// Driver code
let targetVariable = 'Educative';
console.log(countVowels(targetVariable));
