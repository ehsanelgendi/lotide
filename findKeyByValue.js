const findKeyByValue = function (obj, value) {
  const keysArr = Object.keys(obj);
  for (const key of keysArr) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
