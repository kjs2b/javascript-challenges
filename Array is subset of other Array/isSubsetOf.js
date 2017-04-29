//Make an array method that can return whether or not a context array is a subset 
//of an input array. To simplify the problem, you can assume that both arrays will 
//contain only strings.

Array.prototype.isSubsetOf = function(inputArray) {
  //var isSubset = true;
  for (var i = 0; i < this.length; i++) {
    var contains = false;
    for (var j = 0; j < inputArray.length; j++) {
      if (inputArray[j] === this[i]) {
        contains = true;
      }
    }
    if (!contains) {
      return false;
    }
  }
  return true;
};