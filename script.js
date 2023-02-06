
var searchForm = $('#search-form');
var searchInput = $('#search-input');
var todayContainer = $('#today');
var forecastContainer = $('#forecast');
var searchHistoryContainer = $('#history');
var searchBtn =$("#search-button")
// add function to get city weather and date
function currentWeatherCard(city, weather){
  var day = moment().format("D/M/YYYY");
  var tempDg = weather.main.temp;
  var windSpeed = weather.wind.speed;
  var humidityTemp = weather.main.humidity;
  var icon = 'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
  var iconDescription = weather.weather[0].description || weather[0].main;


  var col=$('<div>');
  var card = $('<div>');
  var cardText = $('<div>');
  var heading = $('<h2>');
  var weatherIcon = $('<img>');
  var temp = $('<p>');
  var wind = $('<p>');
  var humidity = $('<p>');

// added attributes class with name and values
  card.attr('class', 'card');
  cardText.attr('class', 'card-body');
  card.append(cardText);
  heading.attr('class', 'h3 card-title');
  temp.attr('class', 'card-text');
  wind.attr('class', 'card-text');
  humidity.attr('class', 'card-text');
  heading.text(city + ' (' + day + ')');
  weatherIcon.attr('src', icon);
  weatherIcon.attr('alt', iconDescription);
  weatherIcon.attr('class', 'weather-img');
  heading.append(weatherIcon);
  temp.text('Temp: ' + tempDg + ' °C');
  wind.text('Wind: ' + windSpeed + ' KPH');
  humidity.text('Humidity: ' + humidityTemp + '%');
  cardText.append(heading, temp, wind, humidity);
  todayContainer.html('');
  todayContainer.append(card);

}
function renderForecastCard(forecast) {
  // variables for data from api
  var icon =
  'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
var iconDescription = forecast.weather[0].description;
var tempDg = forecast.main.temp;
var humidityTemp = forecast.main.humidity;
var windSpeed = forecast.wind.speed;
// Create elements for a card
var col = $('<div>');
var card = $('<div>');
var cardText = $('<div>');
var cardTitle = $('<h5>');
var weatherIcon = $('<img>');
var temp = $('<p>');
var wind = $('<p>');
var humidity = $('<p>');
col.append(card);
card.append(cardText);
cardText.append(cardTitle, weatherIcon, temp, wind, humidity);
col.attr('class', 'col-md');
col.addClass('five-day-card');
card.attr('class', 'card bg-primary h-100 text-white');
cardText.attr('class', 'card-body p-2');
cardTitle.attr('class', 'card-title');
temp.attr('class', 'card-text');
wind.attr('class', 'card-text');
humidity.attr('class', 'card-text');
// Add content to elements
cardTitle.text(moment(forecast.dt_txt).format('D/M/YYYY'));
weatherIcon.attr('src', icon);
weatherIcon.attr('alt', iconDescription);
temp.text('Temp: ' + tempDg + ' °C');
wind.text('Wind: ' + windSpeed + ' KPH');
humidity.text('Humidity: ' + humidityTemp + ' %');
forecastContainer.append(col);
}
// setting a function to get 5 days forcast
function renderForecast(dailyForecast) {
  var headingCol = $('<div>');
  var heading = $('<h4>');
  headingCol.attr('class', 'col-12');
  heading.text('5-Day Forecast:');
  headingCol.append(heading);
  forecastContainer.html('');
  forecastContainer.append(headingCol);
  function noonTime(forecast) {
    return forecast.dt_txt.includes('12');
  }
  var futureCast = dailyForecast.filter(noonTime);
  console.log(futureCast);
  for (var i = 0; i < futureCast.length; i++) {
    renderForecastCard(futureCast[i]);
  }
}
function renderItems(city, data) {
  console.log(data)
  console.log(data.list[1])
  currentWeatherCard(city, data.list[0]);
  renderForecast(data.list);
}

$('#search-form').on('submit', function(event) {
    event.preventDefault();
   var city = $('#search-input').val();
   console.log(city)
   var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=da7f4aab324ce68fae9d4a040baf0bf0" 
   
$.ajax({
    url: queryURL,
    method: 'Get'
}).then(function(data){
renderItems(city, data)
console.log(data)
})
});