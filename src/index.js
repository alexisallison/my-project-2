let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];
let minute = now.getMinutes().toString().padStart(2, "0");
let hour = now.getHours().toString().padStart(2, "0");
let date = document.querySelector("#day");
date.innerHTML = `${day} ${hour}:${minute}`;

function showWeather(response) {
  let temp = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temp}`;
  document.querySelector("#condition").innerHTML =
    response.data.weather[0].main;
}
function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-form");
  let h1 = document.querySelector("#city-to-change");
  h1.innerHTML = `${city.value}`;
  let apiKey = "5201594abea9f3e38b70e65b11a80c24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showWeather);
}
let form = document.querySelector("#searching");
form.addEventListener("submit", searchCity);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round(((temperature - 32) * 5) / 9);
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
