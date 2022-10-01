const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputstring) {
  const results = {};
  for (const letter of inputstring) {
    if(letter !== " "){
      if(results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};


//TEST CODE
console.log(countLetters("lighthouse in the house"));

const result = countLetters("lighthouse in the house");
assertEqual(result["l"], 1);
assertEqual(result["i"], 2);
assertEqual(result["h"], 4);
