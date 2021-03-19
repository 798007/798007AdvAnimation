function Orbiter(actor, orbiterRad, orbitRad, angle, angleVel, clr){
  this.actor = actor;
  this.radius = orbiterRad;
  this.rotator = new JSVector(orbitRad, 0);
  this.rotator.setDirection(angle);
  this.location = JSVector.addGetNew(this.actor.loc, this.rotator);
  this.angleVel = angleVel;
  this.clr = clr;
 }

Orbiter.prototype.update = function(){
  this.rotator.rotate(this.angleVel);
  this.location = JSVector.addGetNew(this.actor.loc, this.rotator);
}

 Orbiter.prototype.render = function(){
   let ctx = game.ctx;
   //draw orbiter
   ctx.strokeStyle = this.clr;
   ctx.fillStyle = this.clr;
   ctx.lineWidth = 1;
   ctx.beginPath();
   ctx.arc(this.location.x, this.location.y, this.radius, Math.PI*2, 0, false);
   ctx.stroke();
   ctx.fill();
}
