const assert = require('chai').assert;
const _ = require('../index');

//test function
describe("#eqArrays", () => {
  it("should returns true if arrays are equal", () => {
    assert.strictEqual(_.eqArrays([1,2,3], [1,2,3]), true);
  });
  it("should returns false if arrays are not equal", () => {
    assert.strictEqual(_.eqArrays([1,2,3], [5,6,7]), false);
  });
  it("should returns false if arrays length don't match", () => {
    assert.strictEqual(_.eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
  });
});