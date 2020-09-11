var canvas;
var ctx;
var ballArr = [];

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
  loadBalls(100);
  animate();
}

function Ball(x, y, dx, dy, radius, color){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  this.color = 'rgba('+red+', '+green+', '+blue+')';

  this.run = function(){
    this.update();
    this.render();
  }

  this.update = function(){
    this.x += this.dx;
    this.y += this.dy;
    if(this.x > window.innerWidth || this.x < 0) this.dx = -this.dx;
    if(this.y > window.innerHight || this.y < 0) this.dy = -this.dy;
  }

  this.render = function(){
    //ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius, Math.PI*2, 0, false);
    ctx.fill();
    ctx.stroke();
  }
}

function animate(){
  for(var i = 0; i < ballArr.length; i++){
    ballArr[i].run();
  }
  requestAnimationFrame(animate);
}



function loadBalls(number){
  for(var i=0; i < number; i++){
    var x = Math.random()*window.innerWidth;
    var y= Math.random()*window.innerHeight;
    var dx = Math.random()*10 - 5;
    var dy = Math.random()*10 - 5;
    var radius = 15;
    ballArr[i] = new Ball(x, y, dx, dy, radius);
  }
}
