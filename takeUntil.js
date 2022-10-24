//function takes array and callback, and returns sliced array up until the callback is true.
const takeUntil = function(array, callback) {
  const results = [];
  //loop through items in the array
  for (let item of array) {
    //if callback is false, push items to array
    if (!callback(item)) {
      results.push(item);
    } else { //if callback is true break
      break;
    }

  }
  return results;
};

module.exports = takeUntil;