function checkNumber(n) {
    // Check if n is odd or if n is even and between 6 and 20 (inclusive)
    if (n % 2 !== 0 || (n >= 6 && n <= 20)) {
        // If the condition is met, print "Weird"
        console.log("Weird"); 
    } else {
        // If the condition is not met, print "Not Weird"
        console.log("Not Weird"); 
    }
}

// Call the function with a value 
checkNumber(100); 
