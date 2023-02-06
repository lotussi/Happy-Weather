
var searchForm = $('#search-form');
var searchInput = $('#search-input');
var todayContainer = $('#today');
var forecastContainer = $('#forecast');
var searchHistoryContainer = $('#history');
var searchBtn =$("#search-button")

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


$('#search-form').on('submit', function(event) {
    event.preventDefault();
   const city = $('#search-input').val();
   console.log(city)
   var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=da7f4aab324ce68fae9d4a040baf0bf0" 
   
$.ajax({
    url: queryURL,
    method: 'Get'
}).then(function(data){
  console.log(data)
})
});