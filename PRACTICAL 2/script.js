const weatherData = {
    Vadodara: { temp: "15°C", condition: "Cloudy", icon: "☁️" },
    Ahemdabad: { temp: "18°C", condition: "Sunny", icon: "☀️" },
    Nadiad: { temp: "20°C", condition: "Partly Cloudy", icon: "⛅" },
    Rajkot: { temp: "22°C", condition: "Clear", icon: "🌤️" },
    Surat: { temp: "24°C", condition: "Hot", icon: "🌡️" }
};

function displayWeather(city, weather) {
    const result = document.getElementById("result");
    result.innerHTML = `
        <div class="weather-result">
            <div style="font-size: 40px; margin-bottom: 10px;">${weather.icon}</div>
            <div style="font-size: 24px; margin-bottom: 5px;">${city}</div>
            <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px;">${weather.temp}</div>
            <div style="font-size: 16px; opacity: 0.9;">${weather.condition}</div>
        </div>
    `;
}

function displayError(city) {
    const result = document.getElementById("result");
    result.innerHTML = `
        <div class="error-result">
            <div style="font-size: 30px; margin-bottom: 10px;">❌</div>
            <div>Weather data for "${city}" is not available</div>
            <div style="font-size: 14px; margin-top: 8px; opacity: 0.8;">Try one of the available cities below</div>
        </div>
    `;
}

function getWeather() {
    const cityInput = document.getElementById("inputCity").value.trim();
    if (!cityInput) {
        displayError("Please enter a city name");
        return;
    }
    
    const city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();
    
    if (weatherData[city]) {
        displayWeather(city, weatherData[city]);
    } else {
        displayError(city);
    }
}

function selectCity(cityName) {
    document.getElementById("inputCity").value = cityName;
    displayWeather(cityName, weatherData[cityName]);
}

document.getElementById("getWeather").addEventListener("click", getWeather);

document.getElementById("inputCity").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getWeather();
    }
});