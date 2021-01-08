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
	if(this.x < 50)
		this.vx = -this.vx;
	if(this.x > w-50)
		this.vx = -this.vx;
	if(this.y < 50)
		this.vy = -this.vy;
	if(this.y > h-50)
		this.vy = -this.vy;
	text("Vx = "+this.vx,0,0);
	text("Vy = "+this.vy,0,50);
	this.x += this.vx;
    this.y += this.vy;

    strokeWeight(100);
    point(this.x,this.y);
  }
}