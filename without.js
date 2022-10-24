const without = function (source, itemsToRemove) {
  let output = [];
  source.forEach(function (element) {
    if (!itemsToRemove.includes(element)) {
      output.push(element);
    }
  });
  return output;
}
module.exports = without;
