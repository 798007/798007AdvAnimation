function Mover(x, y, dx, dy, radius, clr, numOrbs){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.acceleration = new JSVector(0, 0);
  this.radius = radius;
  this.orbitAngle = Math.random()*Math.PI;
  this.clr = clr;
  this.orbiters = [];
  this.orbitclr = "rgba(102, 255, 0, 1)"

  //create all orbiters
   for(let i = 0; i<numOrbs; i++){
     let a = i*(Math.PI*2)/numOrbs + this.orbitAngle;
     let angleVel = numOrbs*0.015;
     this.orbiters.push(new Orbiter(this, 6, 100, a, angleVel, this.orbitclr));
   }
}

Mover.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
    //update and render orbiters
    for(let i=0; i<this.orbiters.length;i++){
      let orb = this.orbiters[i];
      orb.update();
      orb.render();
    }
}
// draw the mover on the canvas
Mover.prototype.render = function(){
    let ctx = game.ctx;
    let b = game.movers;
        ctx.strokeStyle = "rgba(255, 255, 255, 255)";
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.location.x,this.location.y, this.radius, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
  }

// Move the mover in a random direction
Mover.prototype.update = function(){
    if(!game.gamePaused){
      this.velocity.add(this.acceleration);
      this.velocity.limit(6);
      this.location.add(this.velocity);
    }
    // let o = this.orbiters;
    // for(let i = 0; i<o.length; i++){
    //   if(this !== o[i]){
    //     let d = this.location.distance(o[i].location);
    //     if(d<400){
    //       this.acceleration = JSVector.subGetNew(this.location, o[i].location);
    //       this.acceleration.normalize();
    //       this.acceleration.multiply(0.05);
    //     }
    //   }
    // }
}
// When a mover hits an edge of the canvas, turns around to go in the opposite direction
Mover.prototype.checkEdges = function(){
  let canvas = game.canvas;
  if(this.location.x > canvas.width || this.location.x < 0){
    this.velocity.x = -this.velocity.x;
  }
  if(this.location.y > canvas.height || this.location.y < 0){
    this.velocity.y = -this.velocity.y;
  }
}
