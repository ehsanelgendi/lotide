//function takes an array with nested arrays and flattens it to single-level array
const flatten = function(array) {
  let output = [];
  array.forEach(function(element) {
    //check if element is array, loop through this array and push elements to the output array
    if (Array.isArray(element)) {
      element.forEach(function(value) {
        output.push(value);
      });
    } else { //if element is not array, push it the output array
      output.push(element);
    }
  });
  return output;
};

module.exports = flatten;
