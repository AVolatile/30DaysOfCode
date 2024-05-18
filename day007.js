function main() {
    // Read the first line of input and parse it as an integer (number of elements)
    var n = parseInt(readLine());
    
    // Read the second line of input, split it by spaces to get an array of strings
    arr = readLine().split(' ');
    
    // Convert each element of the array from a string to a number
    arr = arr.map(Number);
    
    // Reverse the array of numbers
    arr.reverse();
    
    // Join the elements of the reversed array into a string with spaces between them and print it
    console.log(arr.join(' '));
}
