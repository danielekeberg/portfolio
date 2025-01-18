const API_KEY = 'bae9be304c2181aab78ca66cc22c4856';
const weatherBtn = document.getElementById('cityBtn');
const cityInput = document.getElementById('cityInput');
const cityError = document.getElementById('error');
const cityDisplay = document.getElementById('city');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const countryFlag = document.getElementById('countryFlag');

function weather() {
    const city = cityInput.value;
    if (!city) {
        cityError.textContent = 'error,' + error;
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error('City not found');
        }
        return response.json();
    })
    .then(data => {
        const countryCode = data.sys.country.toLowerCase();

        cityDisplay.textContent = `${data.name}`;
        countryFlag.textContent = `${data.sys.country}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;

        cityDisplay.innerHTML = `
        <h3 id="city">${data.name}</h3>
        <img src="https://flagcdn.com/${countryCode}.svg">`;
    })
    .catch(error => {
        cityError.textContent = error.message;
    });
};

weatherBtn.addEventListener('click', () => {
    weather();
    cityInput.value = '';
});

cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        weather();
        cityInput.value = '';
    }
});