function processData(input) {
    // Split the input string by new lines to get an array of strings
    input = input.split('\n');
  
    // Loop through the array starting from the second element (index 1)
    for (i = 1; i < input.length; i++) {
        // Split the current string into an array of characters
        var splitWord = input[i].split('');
  
        // Initialize empty strings to hold characters at even and odd indices
        var even = '';
        var odd = '';
  
        // Loop through the array of characters
        for (x = 0; x < splitWord.length; x++) {
            // If the index is even, add the character to the 'even' string
            if (x % 2 === 0) {
                even = even + splitWord[x];
            } else {
                // If the index is odd, add the character to the 'odd' string
                odd = odd + splitWord[x];
            }
        }
        // Print the even-index characters followed by the odd-index characters
        console.log(even + ' ' + odd);
    }
}
