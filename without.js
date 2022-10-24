//function takes array and items to be removed array, returns new array without removed items array
const without = function(source, itemsToRemove) {
  let output = [];
  //loop through source array
  source.forEach(function(element) {
    //if the items is not included in the the to be removed array push it to the new output array
    if (!itemsToRemove.includes(element)) {
      output.push(element);
    }
  });
  return output;
};

module.exports = without;
