const flatten = function(array) {
  let output = [];
  array.forEach(function(element) {
    if (Array.isArray(element)) {
      element.forEach(function(value) {
        output.push(value);
      });
    } else {
      output.push(element);
    }
  });
  return output;
};

module.exports = flatten;
