function Moon(x, y, dx, dy, clr){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(dx, dy);
  this.acceleration = new JSVector(0, 0);
  this.clr = clr;
  this.isOverlapping = false;
  this.angl = Math.random() * Math.PI * 2;
  this.anglVel = 0.1;
}
  //  placing methods in the prototype (every mover shares functions)
Moon.prototype.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
// draw the moon on the canvas
Moon.prototype.render = function(){
    let ctx = game.context1;
        // ctx.strokeStyle = "rgba(240, 52, 52, 1)";
        // ctx.fillStyle = "rgba(240, 52, 52, 1)";
        ctx.save();
        ctx.translate(this.location.x, this.location.y);
        this.angl += this.anglVel;
        ctx.rotate(this.angl);
        ctx.strokeStyle = "rgba(189, 195, 199, 1)";
        ctx.fillStyle = "rgba(189, 195, 199, 1)";
        ctx.beginPath();
        ctx.arc(0, 0, 20, Math.PI*2, 0, false);
        ctx.fill();

        ctx.strokeStyle = "rgba(16, 12, 8, 1)";
        ctx.fillStyle = "rgba(16, 12, 8, 1)";
        ctx.beginPath();
        ctx.arc(10,  0, 20, Math.PI*2, 0, false);
        ctx.fill();
        ctx.restore();

    let ctx2 = game.context2;
        ctx2.save();
        ctx2.translate(this.location.x, this.location.y);
        this.angl += this.anglVel;
        ctx2.rotate(this.angl);
        ctx2.strokeStyle = "rgba(189, 195, 199, 1)";
        ctx2.fillStyle = "rgba(189, 195, 199, 1)";
        ctx2.beginPath();
        ctx2.arc(0, 0, 20, Math.PI*2, 0, false);
        ctx2.fill();

        ctx2.strokeStyle = "rgba(16, 12, 8, 1)";
        ctx2.fillStyle = "rgba(16, 12, 8, 1)";
        ctx2.beginPath();
        ctx2.arc(10,  0, 20, Math.PI*2, 0, false);
        ctx2.fill();
        ctx2.restore();
  }
// Move the moonin a random direction
Moon.prototype.update = function(){
    if(!game.gamePaused){
      let acc = new JSVector(0, 0);
      for(let i = 0; i < game.moons.length; i++){
        if(game.moons[i] !== this){
          let distance = this.location.distance(game.moons[i].location);
          if(distance < 60){
            let repel = JSVector.subGetNew(this.location, game.moons[i].location);
            repel = JSVector.subGetNew(this.location, game.moons[i].location);
            repel.normalize();
            repel.multiply(1);
            acc.add(repel);
          }
        }
      }
        this.acceleration.add(acc);
        this.velocity.add(this.acceleration);
        this.acceleration.multiply(0);
        this.velocity.limit(3);
        this.location.add(this.velocity);
    }
}
// When a moon hits an edge of the canvas, it turns around and goes in the opposite direction
Moon.prototype.checkEdges = function(){
  let world = game.world;
  if(this.location.x + 20 > world.right || this.location.x - 20 < world.left){
    this.velocity.x = -this.velocity.x;
  }
  if(this.location.y + 20 > world.top || this.location.y - 20 < world.bottom){
    this.velocity.y = -this.velocity.y;
  }
}
