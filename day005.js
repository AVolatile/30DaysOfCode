'use strict'; // Enable strict mode for better error handling and security

// Set up event listeners to handle input from standard input (stdin)
process.stdin.resume(); // Resume standard input stream
process.stdin.setEncoding('utf-8'); // Set encoding to UTF-8

let inputString = ''; // Initialize an empty string to store input
let currentLine = 0; // Initialize a variable to keep track of the current line number

// Event listener for data event (input)
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin; // Append input to the inputString variable
});

// Event listener for end event (no more input)
process.stdin.on('end', function() {
    inputString = inputString.split('\n'); // Split input by newline character to create an array of lines
    main(); // Call the main function once all input is received
});

// Function to read a single line from inputString
function readLine() {
    return inputString[currentLine++]; // Read the current line and move to the next line
}

// Main function to execute the program logic
function main() {
    const n = parseInt(readLine().trim(), 10); // Read the input and parse it as an integer
    for (let i = 1; i <= 10; i++) { // Loop from 1 to 10
        console.log(n + ' x ' + i + ' = ' + (n * i)); // Print the result of n multiplied by i
    }
}
