var x = 0;
var timer1;
var timer2;
var counter1 = 0;
var phase;


function setup(){
    noCanvas();
    timer1 = createP('timer1');
    timer2 = createP('timer2');
    
    //setInterval(timeIt, 500);
    makeTimer(timer1, 500);
    makeTimer(timer2, 250);
    first();
    createP(phrase);
    
    apitest();
    
}

function makeTimer(timer, wait){
    
    var counter = 0;
    setInterval(timeIt, wait);
function timeIt(){
    
    timer.html(counter);
    counter++;
    
    }
}
function first(){
    var randomword = "helloworld";
    seconed();
    function seconed(){
        
        randomword +="!!!!!!";
        
    }
    phrase = randomword;
}

function apitest(){
    var words = ['vegeta', 'bulma', 'goku', 'gohan', 'kamehameha'];
    
    for (var i = 0; i < words.length; i++){
        var a = createA('#', words[i]);
        assignQuery(a, words[i]);
    }
    
}

function assignQuery(elt, word){
    
    elt.mousePressed(queryAPI);
    function queryAPI(){
        var url = "htt://api.madeup.com/?q="+word;
        loadJSON(url, gotData);
        
    }
    
    function gotData(data){
        makeTimer(timer1, 100);
    }
    
    
}
