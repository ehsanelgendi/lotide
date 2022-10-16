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

module.exports = countLetters;

