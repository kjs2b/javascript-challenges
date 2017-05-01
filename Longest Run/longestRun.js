//Write a function that, given a string, finds the longest run of identical characters and 
//returns an array containing the start and end indices of that run. 

//If there are two runs of equal length, return the first one. Return [0,0] for no runs.

function longestRun (string) {
  // Write your code here, and
  // return your final answer.
  var results = [0,0];
  var maxrun = 1;

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    var run = 1;
    while ( char === string[i+1] ) {
      run++;
      i++;
    }
    if (run > maxrun) {
      maxrun = run;
      results[1] = i;
      results[0] = i - maxrun + 1;
    }
  }
  return results;
}