var dropzone;


function setup(){
    var canvas = createCanvas(200,200);
    background(0);
    
        canvas.drop(gotfile, originalcolor);
    
//        dropzone = select('#dropzone');
//        dropzone.dragOver(dragcolor);
//        dropzone.dragLeave(originalcolor);
//        dropzone.drop(gotfile, originalcolor);
//    
}

function dragcolor() {
    dropzone.style('background-color', '#ccc');
    
    
    
}
function originalcolor(){
    
//    dropzone.style('background-color', '#fff')
    
}
function gotfile(file){
    createP(file.name);
    createP(file.type);
    createP(file.size);
    createImg(file.data);
    
    
    
    
}
var img = createImg(file.data);
img.hide();

image(img, 0, 0, width, height);

    