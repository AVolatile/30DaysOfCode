function main() {
    // Read the integer input
    var n = parseInt(readLine());
    
    // Initialize an array to store the binary representation
    var binary = [];
  
    // Convert the integer to binary by repeatedly dividing by 2
    while (n > 0) {
      // Push the remainder of n divided by 2 to the binary array
      binary.push(n % 2);
      // Update n to be the floor of n divided by 2
      n = Math.floor(n / 2);
    }
  
    // Reverse the binary array to get the correct binary representation
    binary = binary.reverse();
  
    // Initialize counters for consecutive ones and the maximum number of consecutive ones
    var ones = 0;
    var max = 0;
  
    // Iterate over the binary array
    for (i = 0; i < binary.length; i++) {
      if (binary[i] === 1) {
        // If the current bit is 1, increment the ones counter
        ones += 1;
      } else if (binary[i] === 0) {
        // If the current bit is 0, check if the current sequence of ones is the longest
        if (ones > max) {
          max = ones;
        }
        // Reset the ones counter
        ones = 0;
      }
    }
  
    // Final check to update max if the last sequence of ones was the longest
    if (ones > max) {
      max = ones;
    }
  
    // Output the maximum number of consecutive ones
    console.log(max);
  }
  