var climate;
var input;
var api = "http://api.openweathermap.org/data/2.5/weather?";
var cityquery = 'q=';
var apikeyquery = '&appid=';
var apikey = 'd99d4ebff97fc67dbae6611dbc0055ba';
var unitsquery = '&units='
var units = 'imperial'
var city;
function setup(){
    
  createCanvas(600,600);
    //loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Burbank,CA&units=imperial&appid=d99d4ebff97fc67dbae6611dbc0055ba" , gotData);
    
    var button = select('#submit');
    button.mousePressed(weatherAsk);
    input = select('#city');
    }

function weatherAsk(){
  city = input.value(); 
  var url = api + cityquery + city + unitsquery + apikeyquery + apikey;
    loadJSON(url, gotData);
    
    
}

function gotData(data){
   console.log(data);
     climate=data;
    }
function draw(){
    
    background(0);
    
    
    if(climate){
    var humidity = climate.main.humidity;
    var temp = climate.main.temp;
    ellipse(100,250, humidity, humidity);
    ellipse(300,400, temp, temp);
    }
}
