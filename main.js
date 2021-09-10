function preload(){

}

function setup(){
    canvas= createCanvas(640,480);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}


function draw(){
    image(video,200,150,250,200);

    fill(0,0,255);
    stroke(0,0,255);
    circle(50,50,80);

    fill(250,0,100);
    stroke(250,0,150);
    rect(90,40,460,20);

    fill(255,0,255);
    stroke(255,0,255);
    circle(590,50,80);

    fill(3,255,200);
    stroke(3,255,200);
    rect(580,90,20,360);
  
    fill(255,255,0);
    stroke(255,255,0);
    circle(590,430,80);
  
    fill(0,70,25);
    stroke(0,70,25);
    rect(90,420,460,20);

    fill(255,0,0);
    stroke(255,0,0);
    circle(50,430,80);

    fill(200,25,170);
    stroke(200,25,170);
    rect(41,90,20,300);
  


}

function take_snapshot(){
    save('photoframe_image.png');
}






