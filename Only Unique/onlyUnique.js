//Given a string, remove any characters that are not unique from the string.

function onlyUnique (str) {
  var allChars = [];
  var multiples = [];
  var results = [];
  
  for (var i = 0; i < str.length; i++) {
    if (!allChars.includes(str[i])) {
      allChars.push(str[i]);
    } else if (!multiples.includes(str[i])) {
      multiples.push(str[i]);
    }
  }
  for (var j = 0; j < allChars.length; j++) {
    if(!multiples.includes(allChars[j])) {
      results.push(allChars[j]);
    }
  }
  return results.join('');
}
