//Define a function isPrime that takes one integer argument and returns true 
//or false depending on if the integer is a prime.

function isPrime(num) {
  var absNum = Math.abs(num);
  if (absNum === 1 || absNum === 0) return false;
  
  for (var i = 2; i <= Math.sqrt(absNum); i++) {
    if (absNum % i === 0 && absNum !== i) {
      return false;
    }
  }
  return true;
}