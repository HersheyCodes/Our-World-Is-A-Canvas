var drawing = [];

function setup() {
  createCanvas(1600,1000);
  createShape();
}

function createShape() {  
  if(mouseIsPressed){
    var point = {
      x: mouseX,
      y: mouseY
    }
    drawing.push(point);
    //console.log(point)
  }
}

function mouseReleased(){
  //drawing = [];
}

function draw() {
  background(0);  
  createShape();
  beginShape();
  stroke(255);
  strokeWeight(4);
  noFill();
  for(var i = 0; i <drawing.length; i++) {
    vertex(drawing[i].x , drawing[i].y)
  }
  endShape();
   console.log(drawing.length);
}
