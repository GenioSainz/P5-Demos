let width  = 800;
let height = 400
let r      = 20

function setup() {
  createCanvas(width,height);
  background(0,255,0);
  rectMode(CENTER);
}

function draw() {
  
  background(0,255,0);

  if (mouseIsPressed){
    
    strokeWeight(5);stroke(255,255,255);fill(255,0,0);
    
    ellipse(mouseX,mouseY,r,r);
    
    ellipse(mouseX+2*r,mouseY,r,r);
    ellipse(mouseX-2*r,mouseY,r,r);
    
    ellipse(mouseX,mouseY+2*r,r,r);
    ellipse(mouseX,mouseY-2*r,r,r);
    
    strokeWeight(5);stroke(255,255,0);noFill()
    rect(mouseX,mouseY,6*r,6*r)
    
  }
  
  
}