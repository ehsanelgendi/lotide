const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [4, 2, 3]));

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [4, 2, 3]), true); // => should FAIL

assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true);