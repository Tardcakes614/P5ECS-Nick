var apikey = "?api-key=ff4d32de2ba9494f9c0fffa9ae57fb6a";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var query = "&q="
var search;
//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ff4d32de2ba9494f9c0fffa9ae57fb6a&g=instagram
function setup(){
    noCanvas();
    
    //link = createA('#', 'Click me for Dank Articles');
    //link.mousePressed(findArticles);
      var button = select('#submit');
    button.mousePressed(findArticles);
    input = select('#search');
    
}

function findArticles(){
    search = input.value();
    loadJSON(url+apikey+query+search, gotData);
    
    
    
}

function gotData(data){
   console.log(data);
    var articles = data.response.docs;
    for(var i =0; i<articles.length; i++){
    createElement('h1',articles[i].headline.main);
        createP(articles[i].snippet);
    }
}

