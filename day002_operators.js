function solve(mealCost, tipPercentage, taxPercentage) {
    // Calculate tip amount by multiplying meal cost by tip percentage
    let tip = mealCost * (tipPercentage / 100);
    
    // Calculate tax amount by multiplying meal cost by tax percentage
    let tax = mealCost * (taxPercentage / 100);
    
    // Calculate total cost by adding meal cost, tip, and tax
    let totalCost = mealCost + tip + tax;

    // Round the total cost to the nearest integer
    totalCost = Math.round(totalCost);
    
    // Output the total cost to the console
    console.log(totalCost);
}

// Call the solve function with sample values
solve(100, 15, 8);


// Another solution 

// let mealCost = 100
// let tipPercentage = 15
// let taxPercentage = 8


// solve = (mealCost, tipPercentage, taxPercentage) => {
//     let tipAmount = mealCost * (tipPercentage / 100)
//     let taxAmount = mealCost * (taxPercentage / 100) 
//     let totalBill = mealCost + tipAmount + taxAmount

//    console.log(totalBill);
//     return
// }

// solve(mealCost,tipPercentage,taxPercentage);




