var x = 0,y = 0,z;
var w = window.innerWidth;
var h = window.innerHeight;
var ball = new ball(w/2,h/2);
function setup() {
 
  createCanvas(w,h);
  ball.move(-x/5,y/5);
}
function draw() {
  
}
 function ball(x,y)
{
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.move = function(ax,ay)
  {
    this.vx += ax;
    this.vy += ay;
    this.x = constrain(this.x,50,w-50);
    this.y = constrain(this.y,50,h-50);
	this.x += this.vx;
    this.y += this.vy;
    
    strokeWeight(100);
    point(this.x,this.y);
  }
}