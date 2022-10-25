# Lotide v1.0.1

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ehsanelgendi/lotide`

**Require it:**

`const _ = require('@ehsanelgendi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays`: Compares the data of two arrays to check if they are equal to each other.
* `eqObjects`: Compares the data of two objects to check if they are equal to each other.
* `countLetters`: Takes in a sentence and returns a count of each of the letters in the sentence.
* `countOnly`: Given an array and an object, it will return an object containing counts of everything that the input object listed and was contained in the array.
* `findKey`: Takes in an object and a value and returns the first key that corresponds to that value.
* `findKeyByValue`: Takes an object and a value and returns the first key which contains the given value. If no key with that given value is found, it returns undefined
* `flatten`: Takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `head`: Takes in an array and returns the first element in the array
* `letterPositions`: Takes in a string and returns all indices of letter positions in the string.
* `map`: Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* `middle`: Takes in an array and returns middle most element of the array.
* `tail`: Takes in an array and returns everything except the first element of the array.
* `takeUntil`: Takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* `without`: Takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
