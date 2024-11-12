const weatherData = {
    "New York": { temperature : "22°C", description: "Sunny", humidity: "50%" },
    "London": { temperature : "15°C", description: "Cloudy", humidity: "70%" },
    "Paris": { temperature : "18°C", description: "Partly Cloudy", humidity: "65%" },
    "Tokyo": { temperature : "28°C", description: "Clear Skies", humidity: "60%" },
    "Sydney": { temperature : "25°C", description: "Rainy", humidity: "80%" },
    "Oslo": { temperature : "15°C", description: "Rainy", humidity: "60%" }
};

const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherDisplay = document.getElementById("weatherDisplay");

function displayWeather() {
    const city = cityInput.value.trim();
    if (weatherData[city]) {
        const { temperature, description, humidity } = weatherData[city];

        weatherDisplay.innerHTML = `
        <h3>Weather in ${city}</h3>
        <p>Temperature: ${temperature}</p>
        <p>Description: ${description}</p>
        <p>Humidity: ${humidity}</p>
        `;
        weatherDisplay.style.display = "block";
    } else {
        weatherDisplay.innerHTML = `<p>Weather data for ${city} is not available.</p>`;
        weatherDisplay.style.display = "block";
    }
    cityInput.value = "";
}

searchButton.addEventListener("click", displayWeather);

cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        displayWeather();
    }
});