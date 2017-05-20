//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 
//13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

//Create a function that takes a string and returns the string ciphered with Rot13. 
//If there are numbers or special characters included in the string, they should be 
//returned as they are. Only letters from the latin/english alphabet should be shifted, 
//like in the original Rot13 "implementation".

function rot13(message){
  var encoded = ''
  
  for (var i = 0; i < message.length; i++) {
    var code = message.charCodeAt(i);
    if ((code >= 97 && code <=109) || (code >= 65 && code <=77)) {
      code += 13;
    }
    else if ((code > 109 && code <= 122) || (code > 77 && code <= 90)) {
      code -= 13;
    }
    encoded += String.fromCharCode(code);
  }
  
  return encoded;
}