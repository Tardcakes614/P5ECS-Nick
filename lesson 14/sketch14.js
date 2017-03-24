/*
Synchronous:

function preload(){
var items = loadJSON("items.json");
}

Asynchronous:

loadJSON("items.json",gotData)
function gotData(data){
DO STUFF HERE WHEN LOADED
}
*/
var x = 0
var crimeData;
function setup(){
    createCanvas(200,200);
    background(0)
    loadJSON("https://data.lacity.org/api/views/ttiz-7an8/rows.json?accessType=DOWNLOAD", gotData);
    
    
}

function gotData(data){
    console.log(data);

crimeData = data;
    
}
function draw(){
    
    
    if(x > width){
        x = 0;
    }
    if(crimeData){
    randomSeed(4);
    
    for(var i = 0; i < crimeData.createdAt; i++){
    
    ellipse(random(width), random(height), 16, 16);   }

    
}
}
