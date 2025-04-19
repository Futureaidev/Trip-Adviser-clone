// Fetch real-time weather data using OpenWeatherMap API (Example)

const apiKey = 'your_api_key';
const city = 'New York';
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(weatherAPI)
  .then(response => response.json())
  .then(data => {
    const location = data.name;
    const temperature = data.main.temp + '°C';
    const condition = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    // Update weather card dynamically
    document.querySelector('.location').innerText = location;
    document.querySelector('.temperature').innerText = temperature;
    document.querySelector('.condition').innerText = condition;
    document.querySelector('.weather-icon img').src = icon;
  })
  .catch(error => console.log('Error fetching weather data:', error));
