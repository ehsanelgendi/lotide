const assert = require('chai').assert;
const _ = require('../index');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it("returns ['g', 'c', 't', 'm', 't'] when passes array of words and cb (word => word[0])", () => {
    assert.deepEqual(_.map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns [] when passed an empty array and cb (word => word[0])", () => {
    assert.deepEqual(_.map([], word => word[0]), []);
  });
});