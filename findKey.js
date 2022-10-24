//function takes object and callback, returns the first key when the callback returns a truthy value
const findKey = function(object, callback) {
  //loop through object keys
  for (let key in object) {
    //return key if the callback value is true
    if (callback(object[key])) return key;
  }
};

module.exports = findKey;
