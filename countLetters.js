//function takes a sentence and returns a count of each letter
const countLetters = function(inputString) {
  const results = {};
  //loop through each letter in the sentence
  for (const letter of inputString) {
    //don't count the spaces
    if (letter !== " ") {
      //if the letter exists, add 1 to the counter, else add it and assign it a value 1
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

