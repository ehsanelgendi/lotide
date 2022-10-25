const assert = require('chai').assert;
const _ = require('../index');

//test function
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns { Fang: 2, Jason: 1 } for { 'Jason': true, 'Karima': true, 'Fang': true }", () => {
    assert.deepEqual(_.countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true }), { Fang: 2, Jason: 1 });
  });
  it("returns {} for { 'Karima': true }", () => {
    assert.deepEqual(_.countOnly(firstNames, { 'Karima': true }), {});
  });
});