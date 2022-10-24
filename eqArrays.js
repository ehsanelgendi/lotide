//function to compare the data of two arrays, if they are equal to each other
const eqArrays = function(arr1, arr2) {
  //check array length if not equal, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  //loop through array and check if all items are equal
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

