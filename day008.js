function processData(input) {
    // Split the input string by new lines to get an array of inputs
    input = input.split('\n');
    
    // Initialize an empty array to act as a phone book
    var phoneBook = [];
  
    // Loop through the number of entries specified in the first line of input
    for (i = 1; i <= parseInt(input[0]); i++) {
      // Split each entry into name and phone number
      var contactArray = input[i].split(' ');
      // Store the phone number in the phoneBook array with the name as the key
      phoneBook[contactArray[0]] = contactArray[1];
    }
  
    // Loop through the remaining lines of input, which are the queries
    for (i = (parseInt(input[0]) + 1); i < input.length; i++) {
      // Check if the queried name exists in the phoneBook
      if (phoneBook[input[i]]) {
        // If found, print the name and phone number
        console.log(input[i] + '=' + phoneBook[input[i]]);
      } else {
        // If not found, print 'Not found'
        console.log('Not found');
      }
    }
  }
  