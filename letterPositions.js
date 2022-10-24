//function takes a sentence and returns object containing the index of each character
const letterPositions = function(sentence) {
  const results = {};
  //loop through the sentence
  for (let i = 0; i < sentence.length; i++) {
    //check if the letter exists, push its index to array of positions
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else { //if the letter is not exist, add it with its index
      results[sentence[i]] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;


