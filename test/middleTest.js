const assert = require('chai').assert;
const _ = require('../index');

//test function
describe("#middle", () => {
  it("returns [] for middle([1])", () => {
    assert.deepEqual((_.middle([1])), []);
  });
  it("returns [] for middle([1, 2])", () => {
    assert.deepEqual((_.middle([1, 2])), []);
  });
  it("returns [2] for middle([1, 2, 3])", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });
  it("returns [3] for middle([1, 2, 3, 4, 5])", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for middle([1, 2, 3, 4])", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for middle([1, 2, 3, 4, 5, 6])", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});