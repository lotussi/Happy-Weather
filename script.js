
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



  var card = $('<div>');
  var cardText = $('<div>');
  var heading = $('<h2>');
  var weatherIcon = $('<img>');
  var temp = $('<p>');
  var wind = $('<p>');
  var humidity = $('<p>');

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