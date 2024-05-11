// Set up to read input from standard input
process.stdin.resume();
process.stdin.setEncoding('ascii');

// Variables to store input
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

// Event listener for incoming data
process.stdin.on('data', function (data) {
    input_stdin += data;
});

// Event listener for end of input
process.stdin.on('end', function () {
    // Split input into an array of lines
    input_stdin_array = input_stdin.split("\n");
    // Call the main function to start processing
    main();    
});

// Function to read a line from input
function readLine() {
    return input_stdin_array[input_currentline++];
}

// Define the Person class
function Person(initialAge){
    // Declare a variable to store the age
    var age;

    // Check if the initialAge is non-negative
    if (initialAge >= 0) {
        // If initialAge is non-negative, assign it to the age variable
        age = initialAge;
    } else {
        // If initialAge is negative, set age to 0 and print a message
        age = 0;
        console.log('Age is not valid, setting age to 0.');
    }

    // Method to check if the person is old
    this.amIOld = function(){
        // Print appropriate message based on age
        if (age < 13) {
            console.log('You are young.');
        } else if (age >= 13 && age < 18) {
            console.log('You are a teenager.');
        } else {
            console.log('You are old.');
        }
    };

    // Method to simulate passing of one year
    this.yearPasses = function(){
        // Increment the age of the person by 1
        age += 1;
    };
}

// Main function
function main() {
    // Read the number of test cases
    var T = parseInt(readLine());
    // Loop through each test case
    for (var i = 0; i < T; i++) {
        // Read the initial age
        var age = parseInt(readLine());
        // Create a new Person object with the initial age
        var p = new Person(age);
        // Determine and print the initial state of the person
        p.amIOld();
        // Simulate passing of three years
        for (var j = 0; j < 3; j++) {
            p.yearPasses();
        }
        // Print the state of the person after three years
        p.amIOld();
        // Print an empty line for formatting
        console.log("");   
    }
}
