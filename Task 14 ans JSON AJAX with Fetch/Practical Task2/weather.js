// function to get current weather info of city here it's Paris.
function getWeather() {
    // Get city name from input
    const cityName = document.getElementById('city').value;

    // API url to fetch weather info of Paris. Below API only accepts latitude and longitude values so entered statically of Paris.
    const url = `https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.34&current=temperature_2m,wind_speed_10m`;

    //we pass API url in fetch function to get weather info 
    fetch(url)
        .then(response => response.json())
        //if successfully fetched data
        .then(data => {
            const temperature = data.current.temperature_2m;
            const wind_speed = data.current.wind_speed_10m;
            const time = data.current.time;

            // Get weather div and display received info in it
            const weatherElement = document.getElementById('weather');
            //apply some basic styles to that div
            weatherElement.style.cssText = 'display: block; border: 1px solid gray;';

            //dynamically we put fetched values in div by craeting HTML

            weatherElement.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Wind speed: ${wind_speed}</p>
                <p>Time: ${time}</p>
            `;
        })
        //if data not fetched successfully from API, we use catch method to catch error and display it.
        .catch(error => {   
            console.error('There was a problem fetching the weather data:', error);
            const weatherElement = document.getElementById('weather');
            weatherElement.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });
}
