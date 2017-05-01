//Given an array of arbitrarily nested arrays, return n, where n is the deepest level
//that contains a non-array value.

function arrayception (array) {
  var maxDepth = 0;

  function goDeep (innerArray, depth) {
    debugger;
    if (!Array.isArray(innerArray)) {
      if (depth > maxDepth) {
        maxDepth = depth;
        return;
      }
    }
    for (var i = 0; i < innerArray.length; i++) {
        goDeep(innerArray[i], depth + 1);
    }
  }

  goDeep(array, 0);

  return maxDepth
}
