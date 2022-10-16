const assert = require('chai').assert;
const map = require('../map');


describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it("returns ['g', 'c', 't', 'm', 't'] when passes array of words and cb (word => word[0])", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns [] when passed an empty array and cb (word => word[0])", () => {
    assert.deepEqual(map([], word => word[0]), []);
  });
});