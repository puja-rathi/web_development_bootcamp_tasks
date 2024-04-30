//first we require lodash package which we have installed using npm to use it's different functions/methods in our code.
const lodash = require('lodash');

//numbers array initialized having multiple duplicates value
const numbers = [1,2,10,100,10,2,5,6,10,1000,7,2,100,1,5,7,10];

//print only unique numbers from array by using lodash package and it's method 'uniq' to remove duplicates and return new array
console.log(lodash.uniq(numbers));