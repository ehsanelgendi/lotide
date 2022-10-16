const findKeyByValue = function(obj, value) {
  // using for...in
  // for (const key in obj) {
  //   if (Object.hasOwnProperty.call(obj, key)) {
  //     if(obj[key] === value) {
  //       return key;
  //     }
  //   }
  // }
  // using Object.keys & for...of
  const keysArr = Object.keys(obj);
  for (const key of keysArr) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
