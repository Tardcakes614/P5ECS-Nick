var mySound;
function preload() {
  mySound = loadSound('AIRHORN.mp3');
}

  


function setup(){
    noCanvas();
        seed = select('#seed');
        
        output = select('#output');
    
        submit = select('#submit');
        submit.mousePressed(interactor);
        
        
    }

function interactor(){
    var s = seed.value();
    
    var word = s.split(/\W+/);
    
    console.log(word);
    
    for(var i = 0;
        i < word.length; i++){
       //createP('This is a test');
        //createSpan(word[i]);
        //createSpan(' ')
        
        var span1 = createSpan(word[i]);
        span1.parent(output);
        
        //var span2 = createSpan(' ');
        //span2.parent(output);
        
        if(!/\W+/.test(word[i])){
        
        span1.mouseOver(highlight);
        }
        
    }
    
    function highlight(){
    
    //console.log('thisworks');
    //span1.style('background-color', '#c92077');
    console.log(this.html());
    this.html('DANK M3M3');    
      mySound.setVolume(1);
        mySound.play();   
   
        
        
    var c = color(0,random(255),0);
    this.style('background-color', c);
    }
    
}