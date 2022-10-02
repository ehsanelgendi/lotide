const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// TEST CODE

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), undefined);

const bestTVShowsByGenre2 = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  horror: "",
  drama2:  "The Wire"
};