let pokemon_detail = new Promise(function(resolve, reject) {
    fetch("https://pokeapi.co/api/v2/pokemon/charmander/")
    .then((response) => response.json())
    .then((result) => {

        // declare abilities array
        let abilities = [];

        // console 3 properties
        console.log(`Name:
        ${result.name}`);
        console.log(`Weight:
        ${result.weight}`);

        abilities = result.abilities;
        console.log("Abilities:\n",abilities);

        // Return the result so that it's passed along
        let final_data = resolve(result);
        return final_data;
    })
    .catch((error) => {
       let rejection = reject(error);
       return rejection;
    });
});

// executes .then() as our promise resolved.
pokemon_detail.then(
    function successValue(final_data){
        return final_data;
    }
)
.catch(function errorValue(rejection){
    console.log(rejection);
})
.finally(
    function greet(){
        console.log("Congrtaes!! code executed..");
    }
)
