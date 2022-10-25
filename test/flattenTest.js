const assert = require('chai').assert;
const _ = require('../index');

//test function
describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
