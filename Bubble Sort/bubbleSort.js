//Implement bubble sort

function bubbleSort (input) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < input.length - 1; i ++) {
      if (input[i] > input[i+1]) {
        sorted = false;
        var temp = input[i];
        input[i] = input[i+1];
        input[i+1] = temp;
      }
    } 
  }
  return input;
}