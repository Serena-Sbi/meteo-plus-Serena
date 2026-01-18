let apiKey = "to9a4c120b126cd3486ce33fcae533b0";
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input").value;
  searchCity(searchInput);
}

function searchCity(city) {
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&units=metric&key=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  let cityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector(".current-temperature-value");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
