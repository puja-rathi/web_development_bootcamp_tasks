// Define a function hide that takes in a string as an argument, representing a hiding location.

function hide(location) {
    // Store the location in a local variable hideLocation.
    let hideLocation = location;

    // Inside the hide function, define another function seek that returns the hidden location when called.
    function seek() {
        return hideLocation;
    }

    // The hide function should return the seek function, creating a closure around hideLocation.
    return seek;
}

// Call hide with a string argument describing your hiding spot and assign the return value (which is the seek function) to a new variable called startGame.
let startGame = hide("My hiding spot");

// Log the result of calling startGame. 
console.log(startGame());


// console.log(hideLocation);
// Try logging hideLocation directly from outside of the hide and seek functions.
// This will result in an error because hideLocation is not accessible outside of the hide function due to scoping.

