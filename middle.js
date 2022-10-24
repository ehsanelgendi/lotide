//function takes array, and returns middle element/elements
const middle = function(array) {
  let middle = [];
  let middleIndex = "";
  //check if the array has one or zero items return empty array
  if (array.length <= 2) {
    return middle;
  } else if (array.length % 2 !== 0) { //check if the array length is odd and return the middle elment
    middleIndex = (array.length + 1) / 2;
    middle = [array[middleIndex - 1]];
  } else if (array.length % 2 === 0) { // if the array length is even returns the two middle elements
    middleIndex = (array.length / 2);
    middle = [array[middleIndex - 1], array[middleIndex]];
    return middle;
  }

  return middle;
};

module.exports = middle;