const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  let middle = [];
  let middleIndex = "";
  if (array.length <= 2) {
    return middle;
  } else if (array.length % 2 !== 0) {
    middleIndex = (array.length + 1) / 2;
    middle = [array[middleIndex - 1]];
  } else if (array.length % 2 === 0) {
    middleIndex = (array.length / 2);
    middle = [array[middleIndex - 1], array[middleIndex]];
    return middle;
  }

  return middle;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
assertArraysEqual(middle([1]), []);

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);