function Particle(x, y, dx, dy, rad, clr, n){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.acceleration = new JSVector(0, 0);
  this.rad = rad;
  this.clr = clr;
  this.orbiters = [];
}

Particle.prototype.run = function(){
  this.update();
  this.render();
}

Particle.prototype.update = function(){
    if(!game.gamePaused){
      this.location.add(this.velocity);
      this.velocity.limit(3);
      this.velocity.add(this.acceleration);
    }
  }

// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
// Particle.prototype.checkEdges = function(){
//     let canvas = game.canvas;
//     if(this.location.x > canvas.width || this.location.x < 0){
//       this.velocity.x = -this.velocity.x;
//     }
//     if(this.location.y > canvas.height || this.location.y < 0){
//       this.velocity.y = -this.velocity.y;
//     }
//   }
