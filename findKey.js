// const findKey = function (obj, callback) {
//   //const results = [];
//   const keysArr = Object.keys(obj);
//   console.log(keysArr);
//   for (let key in obj) {
//     //console.log(key);
//     //console.log(callback(obj[key]));
//     if (callback(obj[key])) {
//       //results.push(key);
//       return key;
//     }
//   }
//   //return results;
// };
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) return key;
  }
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 4 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 4 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), undefined);