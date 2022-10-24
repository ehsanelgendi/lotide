//function takes array and callback, callback repeats for each element
const map = function(array, callback) {
  const results = [];
  //loop through items of array
  for (let item of array) {
    //call callback function with each item in the array and push returned values to results array
    results.push(callback(item));
  }
  return results;
};
module.exports = map;