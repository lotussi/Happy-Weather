
var searchForm = $('#search-form');
var searchInput = $('#search-input');
var todayContainer = $('#today');
var forecastContainer = $('#forecast');
var searchHistoryContainer = $('#history');
var searchBtn =$("#search-button")

function currentWeatherCard(city, weather){
  var day = moment().format("D/M/YYYY");
  var temp = weather.main.temp;
  var windSpeed = weather.wind.speed;
  var humidity = weather.main.humidity;
  var icon = 'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
  var iconDescription = weather.weather[0].description || weather[0].main;
}