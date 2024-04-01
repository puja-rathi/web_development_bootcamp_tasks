// Define a function that takes an array of integers and returns their sum
function findSum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

// Define a function that subtracts the second number from the first number
function subtractNumbers(a, b) {
    return a - b;
}

// Define a function that multiplies two numbers
function multiplyNumbers(a, b) {
    return a * b;
}

// Define a function that divides the first number by the second number, handling division by zero
function divideNumbers(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    } else {
        return a / b;
    }
}

// Create an array with 3 integers
const numbers = [10, 5, 2];

// Use the array to call findSum function and log its return value
const sum = findSum(numbers);
console.log("Sum:", sum);

// Use the first and second number from the array to call subtractNumbers and log its return value
const difference = subtractNumbers(numbers[0], numbers[1]);
console.log("Difference:", difference);

// Use the third number and first number from array to call multiplyNumbers and log its return value
const multiplication = multiplyNumbers(numbers[2], numbers[0]);
console.log("Multiplication:", multiplication);

// Call divideNumbers using sum of all three numbers obtained from findSum and the third number from the array
const divisionResult = divideNumbers(sum, numbers[2]);
console.log("Division:", divisionResult);
