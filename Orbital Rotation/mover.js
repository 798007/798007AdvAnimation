//  Mover constructor function +++++++++++++++++++++++++++++
function Mover(x, y, dx, dy, radius, clr, numOrbs){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx,dy);
  this.acceleration = new JSVector(0, 0);
  this.radius = radius;
  this.orbitAngle = Math.random() * Math.PI;
  this.clr = clr;
  this.orbiters = [];
  //create all the orbiters
  for(let i = 0; i < numOrbs; i++){
    // let a = i * (Math.PI * 2)/numOrbs + this.orbit;
    // let angleVel = numOrbs + 0.01;
    // this.orbiters.push(new Orbiter(this, 4, 25, a, a));
  }
}

  //  placing methods in the prototype (every movers shares functions)
Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

// draw the bubble on the canvas
Mover.prototype.render = function(){
    let ctx = game.ctx;
    let b = game.movers;

        ctx.strokeStyle = "rgba(255,255,255,255)"//this.clr;
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.location.x,this.location.y, this.radius, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
  }

// Move the bubble in a random direction
Mover.prototype.update = function(){
    if(!game.gamePaused){
      this.velocity.add(this.acceleration);
      this.velocity.limit(3);
      this.location.add(this.velocity);
    }
  }

// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Mover.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if(this.location.x > canvas.width)  this.location.x = 0; // wrap around from right to left
    if(this.location.x < 0)  this.location.x = canvas.width; // wrap around from left to right
    if(this.location.y > canvas.height)  this.location.y = 0; // wrap around from bottom to top
    if(this.location.y < 0)  this.location.y = canvas.height; // wrap around from top to bottom
  }



  function Orbiter(){


  }

  Orbiter.prototype.update = function () {


  }

  Orbiter.prototype.render = function () {


  }
