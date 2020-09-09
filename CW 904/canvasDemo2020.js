var canvas;
var ctx;
var balls = [];
//  intialize the Canvas and context
window.onload = init;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,24,35)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  animate();
}

// Declare and initialize the ball variables
var x, y, dx, dy, radius;
x = Math.random()*window.innerWidth;
y= Math.random()*window.innerHeight;
dx = Math.random()*10 - 5;
dy = Math.random()*10 - 5;
radius = 30;

function Ball(x, y, dx, dy, radius){
  this.x = x;;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
}

Ball.prototype.getDiameter = function(){
  return this.radius*2;
}

Ball.prototype.draw = function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, Math.PI*2, 0, false);
  ctx.fill();
}

Ball.prototype.move = function(){
  this.x += dx;
  this.y += dy;
  if(x > window.innerWidth || x < 0)  dx = -dx;
  if(y > window.innerHeight || y < 0)  dy = -dy;
}



function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(155,180,50)';
  ctx.fillStyle = 'rgba(155,180, 50)';
  ctx.beginPath();
  ctx.arc(x,y,radius,Math.PI*2, 0, false);
  ctx.fill();
  ctx.stroke();
  x += dx;
  y += dy;
  if(x > window.innerWidth || x < 0)  dx = -dx;
  if(y > window.innerHeight || y < 0)  dy = -dy;
  requestAnimationFrame(animate);

  //for(var i =0; i < ballArr.legnth; i++){
  //  ballArr[i].update();
  //}
}

//var ball = {
//    radius:3,
//    diam:function(){
//      return 2*this.radius;
//    }
//};

//function ballFactory(rad){
//  var ball = {
//    radius:rad;
//    getDiameter:function(){
//      return 2*rad;
//    }
//  }
//  return ball;
//
//}

//var ballArr = [];
//for(var i=0; i < 100; i++){
//  ballArr.push(new Ball(3));
//}


var b = new Ball(3);
function Ball(rad){
  this.radius = rad;
}

//Ball.prototype.getDiameter = function(){
//  return this.radius*2;
//}

var balls = [];
for(var i = 0; i <100; i++){
  var ball = new Ball(3);
  balls.push(ball);
}

//function loop(){
//  var balls = [];
//  for(var i = 0; i <100; i++){
//    var ball = new Ball(3);
//    balls.push(ball);
//  }
//  for(var i = 0; i < balls.length; i++){
//    balls[i].animate();
//    balls[i].update();
//  }
//  requestAnimationFrame(loop);
//}
//var arr = new Array();
//for(var i = 0; i < 100; i++){
//  arr.push(new Ball(3));
//}

//loop();
