//declare api url initially

const api_url = "http://thecatapi.com/api/images/get?format=src&type=gif";

async function cat_gif(){
    try{
        const response = await fetch(api_url);

        //extract url from the response
        const imageurl = response.url;
        
        // console genertaed image's url
        console.log(imageurl);
        
    }
    catch(error){
        console.log(`Error:${error}`);
    }
}
//calling cat_gif() function
cat_gif();