var ballArr = [];

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
}

//this function moves the ball and keeps it on the screen
Ball.prototype.update = function(){
  this.x += this.dx;
  this.y += this.dy;
  if(this.x > canvas.width || this.x < 0) this.dx = -this.dx;
  if(this.y > canvas.height || this.y < 0) this.dy = -this.dy;
  this.render();
}

//this function draws the ball
Ball.prototype.render = function(){
  ctx.strokeStyle = this.color;
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x,this.y,this.radius, Math.PI*2, 0, false);
  ctx.fill();
  ctx.stroke();
}

//animates every ball object that is loaded into the ball array
function animate(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(var i = 0; i < ballArr.length; i++){
    ballArr[i].update();
  }
  requestAnimationFrame(animate);
}

//loads ball objects into an array - the parameter number is the amount of ball objects that get loaded into the array
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
