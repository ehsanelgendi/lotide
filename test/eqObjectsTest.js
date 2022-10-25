const assert = require('chai').assert;
const _ = require('../index');

//test function
describe("#eqObjects", () => {
  it("returns true if objects are equal", () => {
    assert.deepEqual(_.eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });
  it("returns false if objects lentgh not equal", () => {
    assert.deepEqual(_.eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }), false);
  });
  it("returns true if objects match, including objects with arrays", () => {
    assert.deepEqual(_.eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }), true);
  });
  it("returns false if objects don't match, including objects with arrays", () => {
    assert.deepEqual(_.eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }), false);
  });
  it("returns false if objects don't match, including objects with arrays, first element is array", () => {
    assert.deepEqual(_.eqObjects({a: [1], b: 2}, {a: [1], b: 3}), false);
  });
});