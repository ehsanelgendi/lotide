const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keysObj1 = Object.keys(object1);
  const keysObj2 = Object.keys(object2);
  if (keysObj1.length !== keysObj2.length) return false;
  for (const key of keysObj1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return (eqArrays(object1[key], object2[key]));
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;