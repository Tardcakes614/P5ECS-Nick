var items;
function preload(){
    
  items = loadJSON("lesson13.json", gotData);  
    
    
    
}

function setup(){
    createCanvas(400, 400);
    
    
    
}
function gotData(data){
    console.log(data);
}
function draw(){
    
   background(0);
    fill(items.weapons[0].red, items.weapons[0].green, items.weapons[0].blue);
    text(items.weapons[0].name, 10, 50);
    text(items.weapons[0].location, 10, 60);
     
    
}

