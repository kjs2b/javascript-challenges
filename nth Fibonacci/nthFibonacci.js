//Write a function that accepts a number n and returns the nth number of the Fibonacci sequence.

nthFibonacci = function(n) {  
  if (n < 2) {
    return n;
  }
  if (!n) {
    return 0;
  }
  
  for (var i=2, x=0, y=1, fib=0; i <= n; i ++) {
    fib = x + y;
    x = y;
    y = fib;
  }
  return fib;
};
