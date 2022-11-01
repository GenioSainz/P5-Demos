let n  = 5;
let w  = 400;
let h  = 300;

let theta  = 0
let dtheta = 0.01
let k      = 0.5

function setup() {

  createCanvas(w,h)
  frameRate(60)

}

function draw() {
  
  background(255,0,0); 

  strokeWeight(5);
  
  var v1  =  k*h*abs(sin(theta));
  var v2  =  h- v1;
  
  var h1  =  k*w*abs(sin(theta));
  var h2  =  w- h1;
  
  rx = h2-h1;
  ry = v2-v1;
  
  stroke(0,255,0);strokeWeight(5);
  line(0,v1,width,v1);
  line(0,v2,width,v2);
  
  stroke(255,0,255);strokeWeight(5);
  line(h1,0,h1,height);
  line(h2,0,h2,height);
  
  stroke(255,255,0);strokeWeight(5);fill(0,0,255)
  strokeWeight(5);
  ellipse(w/2,h/2,rx,ry);
  
  theta = theta + dtheta;
  
}






