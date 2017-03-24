var input;
var lexicon;


function setup(){
    
    noCanvas();
    input = createInput("it was a dark and stormy night.");
    input.size(300);
    
    button = createButton('submit');
    input.changed(processRita);
    button.mousePressed(processRita);
    
    
    lexicon = new RiLexicon;
    console.log(lexicon);
    
    //var r = new RiString();
    
    //console.log(r.features());
    
    
}
function processRita(){
    var s = input.value();
    var r = new RiString(s);
    
    var wordarray=r.words();
    console.log(wordarray);
    
    var output = '';
    
    var partofs = r.pos();
    console.log(partofs);
    
    for (var i = 0; i < wordarray.length; i++){
   
     if(/cc.*/.test(partofs[i])){
         output += lexicon.randomWord(partofs[i])
     }else{  output += wordarray[i];}   
        
        
    
    output += ' ';
    }
    createP(output);
    
    
    
    
}