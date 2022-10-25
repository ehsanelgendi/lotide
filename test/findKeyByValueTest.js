const assert = require('chai').assert;
const _ = require('../index');

//test function
describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    horror: "",
    drama: "The Wire"
  };

  it("returns genre 'drama' when passed object and movie name 'The Wire'", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns genre 'horror' when passed object and movie name as empty string", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, ""), "horror");
  });
  it("returns genre undefined when passed object and movie name as a space", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, " "), undefined);
  });
});