//declare my filterFunction with 2 arguments:actual array & filterfunction 
const myFilterFunction = (arr, filterFunction) =>{
        let six_letter_array = [];

        for(let i = 0; i < arr.length; i++){
            
            //check if filterFunction has any word which is 6 letter long or not
            if(filterFunction(arr[i])){
                six_letter_array.push(arr[i]);
            }
        }

        return six_letter_array;
};

// declare array of string with 10 words
const wordsArray = ["Hello","Laptop","Mobile","Charger","Mouse","Bottle","Tablet","Paper","Pen","Sharpner"];

//calling myFilterFunction with filterFunction applied on each item of wordsArray
const newArray = myFilterFunction(wordsArray,(item)=>item.length === 6);

//console log the new filtered array
console.log(`Returned array: ${newArray}`);