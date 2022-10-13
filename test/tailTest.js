const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Ehsan", "Ehsan");
assertEqual(1, 2);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const arr1element = ["Yo Yo"];
tail(arr1element);
assertEqual(arr1element.length, 1);

const emptyArr = [];
tail(emptyArr);
assertEqual(emptyArr.length, 0);