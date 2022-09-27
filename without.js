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

const without = function (source, itemsToRemove) {
  let output = [];
  source.forEach(function(element) {
    if(!itemsToRemove.includes(element)) {
      output.push(element);
    }
  });
  return output;
}


console.log(without([1, 2, 3], [1])); // => [2, 3]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);