//Implement the function uniqueInOrder which takes as argument a sequence and 
//returns a list of items without any elements with the same value next to each 
//other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  var results = [];
  
  //If the input is an array, we copy it into an array variable
  if (Array.isArray(iterable)) {
    var array = iterable.slice();
  }
  //if the input is a string, we split it into an array of characters (in the array variable)
  else if (typeof iterable === 'string') {
    var array = iterable.split('');
  }
  
  if (array.length === 0) return [];
  
  //Iterate through the array, adding each character that is not identical
  //  to the next character in the sequence to our results array.
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      results.push(array[i]);
    }
  }
  //The last element of the input sequence will always be added to the results array.
  results.push(array[array.length - 1]);
  
  return results;
}