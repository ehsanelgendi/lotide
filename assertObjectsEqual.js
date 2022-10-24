const eqObjects = require('./eqObjects');
const inspect = require('util').inspect; //returns a string representation of the object

//function to assert whether two objects are equal
const assertObjectsEqual = function(actual, expected) {
  //check if two objects match, log assertion passed, else log assertion  failed
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;