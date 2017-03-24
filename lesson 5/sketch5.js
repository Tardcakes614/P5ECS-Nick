var srctxt;
var words;
function preload(){
    
    srctxt = loadStrings('sample5.txt');
    
}




function setup(){
    noCanvas();
    srctxt = join(srctxt, ' ');
    
    
    words = splitTokens(srctxt, ' ,!.?');
    
    
   var seed = select("#seed");
    var submit = select("#submit");
    
    submit.mousePressed(function(){
        
       //createP(seed.value()); 
        //createP(srctxt);
        var poem = diastic(seed.value(), words);
        createP(poem);
        
        
        
        
        
    });
    
}
function diastic(seed, text){
    
    var currentWord = 0;
    var phrase = "";
    for (var i = 0; i < seed.length; i++){
    var c = seed.charAt(i);
        for(var j = currentWord; j < words.length; j++){
           if (words[j].charAt(i) == c){
               
               phrase += words[j];
               phrase += " ";
               currentWord = j + 1;
               
               console.log(words[j]);
               break;
           } 
            
            
            
            
            
            
        }
  
    }
    
    
    return phrase;
    
    
    
    
}
