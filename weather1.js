  $('#control').ready(function() {
    initialize(41.850033, -87.6500523);     
    });    
function initialize(lat,lan) {
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(lat,lan)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var weatherLayer = new google.maps.weather.WeatherLayer({
    temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
  });
  weatherLayer.setMap(map);

  var cloudLayer = new google.maps.weather.CloudLayer();
  cloudLayer.setMap(map);
           
  
}        
function findWeather() {
  
  var start = document.getElementById('start').value;  
 
  
    var request = {
    origin: start,
    };
  document.getElementById('temp').innerHTML ='<center><iframe src="http://api.openweathermap.org/data/2.5/weather?q='+start+'&mode=html" name="targetframe" allowTransparency="true" scrolling="no" frameborder="0"  ></iframe></center>';          
}
        