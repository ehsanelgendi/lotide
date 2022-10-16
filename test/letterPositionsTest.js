const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it("returns [0] for letter 'h' in a string 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("returns [2,3] for letter 'l' in a string 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2,3]);
  });
  it("returns {} when passed an empty string", () => {
    assert.deepEqual(letterPositions(""), {});
  });
  it("returns {e: [0, 1, 2], b: [4, 5, 6], h: [3, 7]} for 'eeehbbbh'", () => {
    assert.deepEqual(letterPositions("eeehbbbh"), {e: [0, 1, 2], b: [4, 5, 6], h: [3, 7]});
  });
});