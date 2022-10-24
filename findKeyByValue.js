//function takes object and value, returns the first key which contains the given value.
const findKeyByValue = function(obj, value) {
  const keysArr = Object.keys(obj);
  //loop through object keys
  for (const key of keysArr) {
    //return key if the value equal to the value object key
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
