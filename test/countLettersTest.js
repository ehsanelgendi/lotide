const assert = require('chai').assert;
const countLetters = require('../countLetters');

// console.log(countLetters("lighthouse in the house"));

// const result = countLetters("lighthouse in the house");
// assertEqual(result["l"], 1);
// assertEqual(result["i"], 2);
// assertEqual(result["h"], 4);

describe("#countLetters", () => {
  it("returns {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,} for 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,});
  });
  it("returns {l: 1, o: 2, p: 1} for loop", () => {
    assert.deepEqual(countLetters("loop"), {l: 1, o: 2, p: 1});
  });
  it("returns {} when passed an empty string", () => {
    assert.deepEqual(countLetters(""), {});
  });
});