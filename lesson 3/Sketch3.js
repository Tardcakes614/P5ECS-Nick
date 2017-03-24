var textfield;
var output;
var submit;



function setup(){
noCanvas();
    textfield = select('#storyfield');
    output = select('#output')
        
        //Submit Buton Setup
        submit = select('#submit')
        submit.mousePressed(tweetchecker);
}


function newTyping (){
    var s = textfield.value();
    createP("The length of your story is " + s.length  + " characters.");
    s.indexOf("e");
    createP(s.indexOf("e"));
    
    
    var wordsearch = "puppy";
    var theword = s.indexOf(wordsearch);
    createP("You can find the word " +wordsearch + " starting at " + theword);
    
    createP(s.indexOf("e",6));
    
    
    
    
    
    
    var newtxt = s.substring(8,11);
    createP(newtxt);
    
    
    var newertxt = s.substring(s.length/2,s.length)
    createP(newertxt);
    
    
    var splitstory = split(s, " ");
    splitstoyry = splitstory.sort();
    s = join (splitstory, " ");
    createP(s);
}
    
function tweetchecker(){
    var s = textfield.value();
    if (s.length < 141){
        createP(s);
    }else{
        createP("your message is too long :( ")
    }
    
    
}

