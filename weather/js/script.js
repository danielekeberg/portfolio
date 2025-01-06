const apiKey = 'bae9be304c2181aab78ca66cc22c4856';
const getWeatherButton = document.getElementById('getWeather');
const weatherInfo = document.getElementById('weatherOutput');

function weather() {
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
        <h2>Weather in <strong>${data.name}, ${data.sys.country}</strong></h2>
        <div class="temp">
            <p>Temperature: <strong>${data.main.temp}°C</strong></p>
            <p>Feels Like: <strong>${data.main.feels_like}°C</strong></p>
        </div>
        <p>Weather: <strong>${data.weather[0].description}</strong></p>
        <p>Humidity: <strong>${data.main.humidity}%</strong></p>
        <p>Wind Speed: <strong>${data.wind.speed} m/s</strong></p>
        `;
    })
    .catch(error => {
        weatherInfo.innerHTML = error.message;
    });
};

getWeatherButton.addEventListener('click', weather);
