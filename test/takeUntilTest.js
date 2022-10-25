const assert = require('chai').assert;
const _ = require('../index');

//test function
describe('#takeUntil', () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

  it("returns [1, 2, 5, 7, 2] when passes [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(_.takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("returns ['I've', 'been', 'to', 'Hollywood'] when passes ['I've', 'been', 'to', 'Hollywood', ',', I've, 'been', 'to', 'Redwood'] ", () => {
    assert.deepEqual(_.takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood']);
  });

});