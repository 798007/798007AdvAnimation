//  Mover constructor function +++++++++++++++++++++++++++++
function Mover(x, y, dx, dy, rad, clr){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.attract = new JSVector(0,0);
  this.repulse = new JSVector(0,0);
  this.rad = rad;
  this.clr = clr;
  this.isOverlapping = false;
}

  //  placing methods in the prototype (every mover shares functions)
Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

// draw the mover on the canvas
Mover.prototype.render = function(){
  let ctx = game.ctx;
  let b = game.movers;
  if(this == b[0] || this == b[1]){
    ctx.strokeStyle = "rgba(76, 241, 255, 10)";
    ctx.fillStyle = "rgba(76, 241, 255, 10)";
  }
  else if(this == b[2] || this == b[3]){
    ctx.strokeStyle = "rgba(69, 17, 38, 42)";
    ctx.fillStyle = "rgba(69, 17, 38, 42)";
  }
  else{
    ctx.strokeStyle = this.clr;
    ctx.fillStyle = this.clr;
  }
        // ctx.beginPath();
        // ctx.arc(this.location.x,this.location.y, this.rad, Math.PI*2, 0, false);
        // ctx.stroke();
        // ctx.fill();
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.location.x, this.location.y);
        ctx.rotate(this.velocity.getDirection());
        ctx.moveTo(20, 0);
        ctx.lineTo(-20, -10);
        ctx.lineTo(-20, 10);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.restore();
  }

// Move the mover in a random direction
Mover.prototype.update = function(){
  let b = game.movers;
  if(this !== b[0]){
    let d = this.location.distance(b[0].location);
    if(d < 300){
      this.attract = JSVector.subGetNew(b[0].location, this.location);
      this.attract.normalize();
      this.attract.multiply(0.5);
    }
  }
  if(this !== b[1]){
    let d = this.location.distance(b[1].location);
    if(d < 300){
      this.attract = JSVector.subGetNew(b[1].location, this.location);
      this.attract.normalize();
      this.attract.multiply(0.5);
    }
  }
  if(this !== b[2]){
    let d = this.location.distance(b[2].location);
    if(d < 300){
      this.repulse = JSVector.subGetNew(this.location, b[2].location);
      this.repulse.normalize();
      this.repulse.multiply(0.5);
    }
  }
  if(this !== b[3]){
    let d = this.location.distance(b[3].location);
    if(d < 300){
      this.repulse = JSVector.subGetNew(this.location, b[3].location);
      this.repulse.normalize();
      this.repulse.multiply(0.5);
    }
  }
  if(!game.gamePaused){
    //location.add(velocity);
    this.velocity.add(this.attract);
    this.velocity.add(this.repulse);
    this.velocity.limit(3);
    //this.velocity.x = Math.random()*6-3;
    //this.velocity.y = Math.random()*6-3;
    this.location.add(this.velocity);
    //   x += this.velocity.dx;
    // this.location.y += this.dy;
  }
}

// When a mover hits an edge of the canvas, it wraps around to the opposite edge.
Mover.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if (this.location.x > canvas.width){
      this.location.x = 0;
    }
    else if(this.location.x < 0){
      this.location.x = canvas.width;
    }
    if (this.location.y > canvas.height){
      this.location.y = 0;
    }
    else if(this.location.y < 0){
      this.location.y = canvas.height;
    }
  }
