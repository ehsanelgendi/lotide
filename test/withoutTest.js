const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns [2, 3] when passes [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]),  [2, 3]);
  });
  it("returns ['1', '2'] when passes ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("[ 'hello', 'world' ] when passed ['hello', 'world', 'lighthouse'], ['lighthouse']", () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), [ "hello", "world" ]);
  });
});