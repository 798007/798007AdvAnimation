function Particle(x, y, rad, clr){
  this.location = new JSVector(x, y);
  this.velocity = new JSVector(Math.random()*3-1, Math.random()*3-1);
  this.acceleration = new JSVector(0, 0.07);
  this.lifeSpan = 200;
  this.radius = rad;
  this.clr = clr;
}

Particle.prototype.run = function(){
  this.update();
  this.render();
}

Particle.prototype.update = function(){
    if(!game.gamePaused){
      this.velocity.add(this.acceleration);
      this.location.add(this.velocity);
      this.lifeSpan = this.lifeSpan - 2;
    }
  }

Particle.prototype.render = function(){
  let ctx = game.ctx;
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.location.x, this.location.y, this.radius, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
}

Particle.prototype.isDead = function(){
  if(this.lifeSpan < 0){
    return true;
  }else{
    return false;
  }
}
