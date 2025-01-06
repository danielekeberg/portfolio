const apiKey = 'bae9be304c2181aab78ca66cc22c4856';
const getWeatherButton = document.getElementById('getWeather');
const weatherInfo = document.getElementById('weatherInfo');

getWeatherButton.addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (!city) {
        weatherInfo.innerHTML = 'Please enter a city name.';
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error('City not found');
        }
        return response.json();
    })
    .then(data => {
        weatherInfo.innerHTML = `
        <h4>Weather now</h4>
        <div class="weatherInfoContainer">
            <img src="../assets/thermometer-2-64-2.png">
            <h2>${data.main.temp}°</h2>
            <p>Feels like&nbsp<span>${data.main.feels_like}<p>
            <img id="wind" src="../assets/Pngtreevector_wind_icon_4225203-2.png">
            <h2>${data.wind.speed} m/s</h2>
            <p>${data.weather[0].description}</p>
            `;
            
        
    })
    .catch(error => {
        weatherInfo.innerHTML = error.message;
    })
});