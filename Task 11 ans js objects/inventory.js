// define constructor function shoes
function Shoes(name,product_code,qty,value_per_item){
    // object properties
    this.name = name;
    this.product_code = product_code;
    this.qty = qty;
    this.value_per_item = value_per_item;
}

// five instances of shoes object
let shoe1 = new Shoes("Nike",11,20,200);
let shoe2 = new Shoes("Sketchers",21,30,400);
let shoe3 = new Shoes("Bakers",31,10,100);
let shoe4 = new Shoes("Grenson",41,50,500);
let shoe5 = new Shoes("Cheaney",61,25,150);

let all_shoes = [shoe1,shoe2,shoe3,shoe4,shoe5];

//function to search for any shoe within the array
let search_shoe = (shoeName)=>{
    return all_shoes.find((shoe=>shoe.name === shoeName));
}
console.log(`\nSearch for any shoe within the array:`);
console.table(search_shoe("Nike"));

//function to find the shoe with the lowest value per item
let lowest_value_shoe = (all_shoes)=>{
    return all_shoes.reduce((minShoe,currentShoe)=>{
        if(currentShoe.value_per_item < minShoe.value_per_item){
            return currentShoe;
        }
        else{
            return minShoe;
        }
    },all_shoes[0]);
}
console.log(`\n Shoe with lowest value per item is:`);
console.table(lowest_value_shoe(all_shoes));

//function to find the shoe with the highest value per item
let highest_value_shoe = (all_shoes)=>{
    return all_shoes.reduce((maxShoe,currentShoe)=>{
        if(currentShoe.value_per_item > maxShoe.value_per_item){
            return currentShoe;
        }
        else{
            return maxShoe;
        }
    },all_shoes[0]);
}
console.log(`\nShoe with highest value per item is:`);
console.table(highest_value_shoe(all_shoes));

//function to order all the objects in ascending order based on the "value per item" property
let ascending_objects = (all_shoes)=>{
    return all_shoes.sort((currentShoe,nextShoe) =>{
         return currentShoe.value_per_item - nextShoe.value_per_item;
     });
 
 }
 const sortedShoes = ascending_objects(all_shoes);
 console.log(`\n Shoes in ascending order are:`);
 console.table(sortedShoes);
 

//function to edit all four properties for each of the five shoe instances
let edit_properties = (all_shoes,name,product_code,qty,value_per_item)=>{
    all_shoes.forEach(shoe => {
        shoe.name = name;
        shoe.product_code = product_code;
        shoe.qty = qty;
        shoe.value_per_item = value_per_item;
    });
}
edit_properties(all_shoes, "Bata", 99, 50, 1000);
console.log(`\n Updated properties of each shoe:`);
console.table(all_shoes);

