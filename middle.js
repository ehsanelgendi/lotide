const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middle = [];
  let middleIndex = "";
  if (array.length <= 2) {
    return middle;
  } else if (array.length % 2 !== 0) {
    middleIndex = (array.length + 1) / 2;
    middle = [array[middleIndex - 1]];
  } else if (array.length % 2 === 0) {
    middleIndex = (array.length / 2);
    middle = [array[middleIndex - 1], array[middleIndex]];
    return middle;
  }

  return middle;
};

module.exports = middle;