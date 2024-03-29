function Particle(x, y, rad, clr){
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*3-1, Math.random()*3-1);
  //this.acc = new JSVector(0, 0.07);
  this.lifeSpan = 300;
  this.radius = rad;
  this.clr = clr;
}

Particle.prototype.run = function(){
  this.update();
  this.render();
}

Particle.prototype.update = function(){
  //this.vel.add(this.acc);
  this.loc.add(this.vel);

  //particle disappears when an orbiter hits it
  for(let i = 0; i < game.actors.length; i++){
    let count = 0;
    for(let j = 0; j < game.actors[i].orbiters.length; j++){
      let orb = game.actors[i].orbiters[j];
      if(this.loc.distance(orb.location) < this.radius + orb.radius){
        this.lifeSpan = -1;
        orb.clr = "red";
      }
      if(orb.clr == "red"){
        count++;
         if(count == 5){
           game.actors.splice(game.actors[i], 1);
         }
      }
    }
  }
}

//draws particles on the canvas
Particle.prototype.render = function(){
  let ctx = game.ctx;
  ctx.strokeStyle = "black";
  ctx.fillStyle = this.clr;
  ctx.save();
  ctx.beginPath();
  ctx.arc(this.loc.x + game.cellWidth/2, this.loc.y + game.cellWidth/2, this.radius, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

//when a particle is dead, it will disappear from the canvas
Particle.prototype.isDead = function(){
  if(this.lifeSpan < 0){
    return true;
  }else{
    return false;
  }
}
