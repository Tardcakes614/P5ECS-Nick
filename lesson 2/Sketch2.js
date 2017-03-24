var textfield;
var output;
function setup(){
    //textfield = createInput("Type Your Name");
    textfield = select('#storyfield');
    textfield.input(newTyping);
    textfield.changed(newText);
        output = select('#output')
        
        //Submit Buton Setup
        submit = select('#submit')
        submit.mousePressed(drawThis);
}

function newText (){
  createP(textfield.value());  
    }
function newTyping (){
    //createP(textfield.value());
    output.html(textfield.value());
    
}
function drawThis (){
    ellipse (50,50,100,100);
}