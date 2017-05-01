//Write a function that accepts an array of integers and returns the 
//largest product possible from three of those numbers.

function largestProductOfThree (array) {
  var first = null;
  var second = null;
  var third = null;
  var firstNeg = 0;
  var secondNeg = 0;
  var thirdNeg = 0;

  for (var i = 0; i < array.length; i++) {
    var current = array[i];
    
    if (current > first || first === null) {
      third = second;
      second = first;
      first = current;
    } else if (current > second || second === null) {
      third = second;
      second = current;
    } else if (current > third || third === null) {
      third = current;
    }
    if (current < firstNeg) {
      thirdNeg = secondNeg
      secondNeg = firstNeg;
      firstNeg = current;
    } else if (current < secondNeg) {
      thirdNeg = secondNeg;
      secondNeg = current;
    } else if (current < thirdNeg) {
      thirdNeg = current;
    }
  }

  if (first < 0) {
    return first*second*third;
  }

  return first * ((firstNeg*secondNeg > second*third) ? firstNeg*secondNeg : second*third);
}