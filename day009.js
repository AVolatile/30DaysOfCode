function factorial(n) {
    // Initialize result to 1 because the factorial of 0 is 1
    var result = 1;
  
    // Loop from n down to 1, multiplying the result by the current value of i in each iteration
    for (i = n; i >= 1; i--) {
      result *= i;
    }
  
    // Return the computed factorial value
    return result;
  }
  