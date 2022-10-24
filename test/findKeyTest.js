const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  let names = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };
  it('returns (noma) from object names with cb (x => x.stars === 2)', () => {
    assert.strictEqual(findKey(names, x => x.stars === 2), "noma");
  });
  it('returns (undefined) from object names with cb (x => x.stars === 2) if cb functions returns nothing', () => {
    assert.strictEqual(findKey(names, x => x.stars === 5), undefined);
  });
});