const eqArrays = require('./eqArrays');

//function takes two objects to check if they are equal
const eqObjects = function(object1, object2) {
  //create array of keys
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);
  //check key arrays length if not equal return false
  if (keysObj1.length !== keysObj2.length) return false;
  //loop through keys in object1 and compare its values to the values of object2
  for (const key of keysObj1) {
    //check if values are arrays, call eqArrays to check if they are equal
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) { //if not arrays compare the values
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;