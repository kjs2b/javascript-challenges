//Write a function that takes an (unsigned) integer as input, and returns 
//the number of bits that are equal to one in the binary representation of that number.

var countBits = function(n) {
  var binary = n.toString(2);
  var oneCount = 0;
  
  for (var i = 0; i < binary.length; i++) {
    if (binary[i] === '1') oneCount++;
  }
  
  return oneCount;
};