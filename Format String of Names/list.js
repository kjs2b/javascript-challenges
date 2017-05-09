//Given: an array containing hashes of names

//Return: a string formatted as a list of names separated by 
//commas except for the last two names, which should be separated 
//by an ampersand.

function list(names){
  var namesArray = [];
  
  for (var i = 0; i < names.length; i++) {
    if (names[i]['name']) namesArray.push(names[i]['name']);
  }
  
  if (namesArray.length === 0) return '';
  if (namesArray.length === 1) return namesArray[0];
  
  var output = '';
  for (var i = 0; i < namesArray.length - 2; i++) {
    output = output + namesArray[i] + ', ';
  }
  return output + namesArray[namesArray.length - 2] + ' & '
    + namesArray[namesArray.length - 1];
}