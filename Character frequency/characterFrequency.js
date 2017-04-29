//Write a function that takes as its input a string and returns an 
//array of arrays sorted in descending order by frequency
//and then by ascending order by character.

function characterFrequency (string) {
  // 1. Stored chars and frequencies in object
  var resultsObj = {};
  var resultsArray = [];

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (resultsObj[char] === undefined) {
      resultsObj[char] = 1;
    }
    else {
      resultsObj[char]++;
    }
  }

  for (key in resultsObj) {
    var innerArray = [key, resultsObj[key]]
    resultsArray.push(innerArray);
  }
  resultsArray.sort(function(a, b) {
    if (a[1] < b[1]){
      return 1;
    } 
    if (a[1] > b [1]) {
      return -1
    }
    if (a[1] === b[1]) {
      if (a[0] < b[0]) {
        return -1
      } else {
        return 1
      }

      }
    });
  return resultsArray;
}