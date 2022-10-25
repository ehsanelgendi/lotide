const assert = require('chai').assert;
const _ = require('../index');

//test function
describe("#without", () => {
  it("returns [2, 3] when passes [1, 2, 3], [1]", () => {
    assert.deepEqual(_.without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] when passes ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("[ 'hello', 'world' ] when passed ['hello', 'world', 'lighthouse'], ['lighthouse']", () => {
    assert.deepEqual(_.without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });
});