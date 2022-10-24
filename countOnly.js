// function takes array & object, and returns new object contains counts of items in the i/p object
//and was contained in the array
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  //loop through the i/p array
  for (const item of allItems) {
    //check if the item is in the object and add 1, else add it with value 1
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

module.exports = countOnly;


