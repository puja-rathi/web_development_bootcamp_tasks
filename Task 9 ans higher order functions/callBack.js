// declare intervalID and counter variables
let intervalID;
let counter = 0;

//startCounter function to set and increment counter by 1 after every 1000ms
let startCounter = function(){
    intervalID = setInterval(()=>{
        counter += 1;
        console.log(counter);
    },1000);
}

//stopConter function to stop counter from incrementing
function stopCounter(){
    clearInterval(intervalID);
}

//get start and stop button from html by using document.getElementById method
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

//access buttons and addEventListener 'click' to start and stop button and call the functions to perform specific actions
startButton.addEventListener('click',startCounter);
stopButton.addEventListener('click',stopCounter);

