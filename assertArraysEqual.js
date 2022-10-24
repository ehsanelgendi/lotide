const eqArrays = require('./eqArrays');

//function to assert whether two arrays are equal
const assertArraysEqual = function(array1, array2) {
  //check if both arays are equal, log assertion passed, else log assertion failed
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;