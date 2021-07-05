status = "";
objects = [];


function setup(){
    canvas = createCanvas(480,380);
    canvas.position(450, 300);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video , 0 , 0 , 480 , 380);
    if(status != ""){
        objectDetector.detect(video , gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("drdoomvsironman").innerHTML = "STATUS = object has been detected";
            document.getElementById("doomdrdrdr").innerHTML = "There are " + objects.length + "objects ";
            percent = floor(objects[i].confidence * 100);
            r = random(255);
            g = random(255);
            b = random(255);
            fill(r , g , b);
            text(objects[i].label + " " + percent + "%" , objects[i].x + 10, objects[i].y + 10);
            stroke(r,g,b);
            noFill();
            rect(objects[i].x ,objects[i].y ,objects[i].width ,objects[i].height);
            document.getElementById("duper").innerHTML = "object name :" + objects[i].label;

        }
    }

}
function gotResult(error , results){
if(error){
    console.log(error);
}
console.log(results);
objects = results;
}


function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);

    document.getElementById("drdoomvsironman").innerHTML = "STATUS : object is being detected";
}

function modelLoaded(){
    console.log("modkcfjvhsjghsdjgfhfuigffhjhgjfgkhyguj tliykrbt idrgycvtrjrtrvjyetv   gdrkuewgjT");
    status = true;
}