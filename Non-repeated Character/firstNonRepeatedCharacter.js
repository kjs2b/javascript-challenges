//Given an arbitrary input string, return the first non-repeating 
//character. For strings with all repeats, return 'sorry'

function firstNonRepeatedCharacter (string) {
  var pastChar = [];
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (!(string.includes(char, i+1) || pastChar.includes(char))) {
      return char;
    } else {
      pastChar.push(char);
    }
  }
  return 'sorry';
}
