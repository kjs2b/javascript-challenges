commonCharacters = function(string1, string2){
  var common = '';

  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      if (string2[j] === string1[i] &&
        string1[i] !== ' ') {
        var commonContains = false;
        for (var k = 0; k < common.length; k++) {
          if (string1[i] === common[k]) {
            commonContains = true;
          }
        }
        if (!commonContains) {
          common += string1[i];
        }
      }
    }
  }
  return common;
};
