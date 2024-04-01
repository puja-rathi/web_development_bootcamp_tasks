// Ask user to input a number with at least 3 digits
let inputNumber = prompt("Enter a number with at least 3 digits:");

// Convert the input to a number
let number = Number((inputNumber));

// Convert number to string to manipulate digits
let numberString = number.toString();

// Check if the number has at least 3 digits
if (numberString.length < 3) {
    alert("Please enter a number with at least 3 digits.");
} else {
    // Swap the second digit and last digit
    let newNumberString = "";
    for (let i = 0; i < numberString.length; i++) {
        if (i === 1) { // If it's the second digit
            newNumberString += numberString[numberString.length - 1]; // Append last digit
        } else if (i === numberString.length - 1) { // If it's the last digit
            newNumberString += numberString[1]; // Append second digit
        } else {
            newNumberString += numberString[i]; // Append unchanged digit
        }
    }

    // Convert the new string back to a number
    let newNumber = Number((newNumberString));

    // Output original and new number
    alert(`Original number: ${number}
    New number with second and last digits swapped: ${newNumber}`);
}