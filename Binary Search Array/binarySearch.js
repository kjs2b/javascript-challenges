//Given a sorted array of integers, find the index of a 
//target value using a binary search algorithm.

function binarySearch (array, target) {
  function sliceAndCheck (subArray, elementsBelow) {
    var middle = Math.floor(subArray.length / 2);
    var middleVal = subArray[middle];

    if (target === middleVal) {
      return elementsBelow + middle;
    }
    else if (subArray.length === 1) {
      return -1;
    }
    else if (target < middleVal) {
      return sliceAndCheck(subArray.slice(0, middle), elementsBelow);
    }
    else {
      return sliceAndCheck(subArray.slice(middle), elementsBelow + middle);
    }
  }
  return sliceAndCheck(array, 0);
}
