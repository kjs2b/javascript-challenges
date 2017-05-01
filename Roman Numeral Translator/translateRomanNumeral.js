//Given a roman numeral as input, write a function that converts the roman numeral 
//to a number and output it.

function translateRomanNumeral (romanNumeral) {
  var number = 0;

  for (var i = 0; i < romanNumeral.length; i++) {
    var current = DIGIT_VALUES[romanNumeral[i]];
    if (!current) {
      return "null";
    }
    if (current < DIGIT_VALUES[romanNumeral[i+1]]) {
      number -= current
    } else {
      number += current
    }
  }
  return number
}
