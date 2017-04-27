//Given an array of arrays, return
//those arrays concatenated together.

//Recursive implementation
function concatArrays (arrays) {
  //instantiate results array
  var finalArray = [];

  //create inner recursive function to do the work
  function addElementsToFinal (arrayOfArrays) {
    //base case: no remaining elements in input array
    if (!arrayOfArrays.length) {
      return finalArray;
    }
    //for each subarray in the source arrays first element...
    for (var i = 0; i < arrayOfArrays[0].length; i++) {
      //...add to the results array
      finalArray.push(arrayOfArrays[0][i]);
    }
    //recursive function call of the rest of the source array
    return addElementsToFinal (arrayOfArrays.slice(1));
  }
  //call recursive inner function, eventually return results array
  return addElementsToFinal (arrays);
}
