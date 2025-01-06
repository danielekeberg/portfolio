const apiKey = 'bae9be304c2181aab78ca66cc22c4856';
const getWeatherButton = document.getElementById('getWeather');
const weatherInfo = document.getElementById('weatherOutput');

function weather() {
    const city = document.getElementById('city').value;
    if (!city) {
        weatherInfo.innerHTML = `
        <div class="cityError">
            <h2>Please enter a city name.</h2>
        </div>
        `;
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
        const countryCode = data.sys.country.toLowerCase();

        weatherInfo.innerHTML = `
        <div class="location">
            <h2>Weather in <strong>${data.name}</strong></h2>
            <img src="https://flagcdn.com/${countryCode}.svg">
        </div>
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

getWeatherButton.addEventListener('click', function () {
    weather();
    document.getElementById('city').value = "";
})

document.getElementById('city').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        weather();
        document.getElementById('city').value = "";
    }
})
