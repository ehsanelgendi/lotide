const assert = require('chai').assert;
const _ = require('../index');

//test function
describe('#letterPositions', () => {
  it("returns [0] for letter 'h' in a string 'hello'", () => {
    assert.deepEqual(_.letterPositions("hello").h, [0]);
  });
  it("returns [2,3] for letter 'l' in a string 'hello'", () => {
    assert.deepEqual(_.letterPositions("hello").l, [2, 3]);
  });
  it("returns {} when passed an empty string", () => {
    assert.deepEqual(_.letterPositions(""), {});
  });
  it("returns {e: [0, 1, 2], b: [4, 5, 6], h: [3, 7]} for 'eeehbbbh'", () => {
    assert.deepEqual(_.letterPositions("eeehbbbh"), { e: [0, 1, 2], b: [4, 5, 6], h: [3, 7] });
  });
});