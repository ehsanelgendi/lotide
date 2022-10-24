//function to assert whether two primitive values are equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //check if two inputs are equal, log assertion passed, else log assertion  failed
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;