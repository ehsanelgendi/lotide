const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    horror: "",
    drama: "The Wire"
  };

  it("returns genre 'drama' when passed object and movie name 'The Wire'", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns genre 'horror' when passed object and movie name as empty string", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, ""), "horror");
  });
  it("returns genre undefined when passed object and movie name as a space", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined);
  });
});