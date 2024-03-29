function Particle2(x, y, rad, clr){
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(Math.random()*3-1, Math.random()*3-1);
  //this.acc = new JSVector(0, 0.07);
  this.lifeSpan = 200;
  this.radius = rad;
  this.clr = clr;
}

Particle2.prototype.run = function(){
  this.update();
  this.render();
}

Particle2.prototype.update = function(){
  //this.vel.add(this.acc);
  this.loc.add(this.vel);

  //particle disappears when an orbiter hits it
  for(let i = 0; i < game.actors.length; i++){
    for(let j = 0; j < game.actors[i].orbiters.length; j++){
      let orb = game.actors[i].orbiters[j];
      if(this.loc.distance(orb.location) < this.radius + orb.radius){
        this.lifeSpan = -1;
        game.actors[i].clr = "blue";
        //game.actors[i].vel.limit(game.actors[i].maxSpeed/4);
        game.actors[i].maxSpeed = game.actors[i].maxSpeed/1.5;
        //orb.clr = "blue";
      }
    }
  }

  //mover changes color when hitting particle
  // for(let i = 0; i < game.actors.length; i++){
  //     if(this.loc.distance(game.actors[i].loc) < this.radius + game.actors[i].radius){
  //       game.actors[i].clr = "rgba(255, 0, 0)"
  //     }
  //   }
  // this.lifeSpan = this.lifeSpan-2;
}

//draws particles on the canvas
Particle2.prototype.render = function(){
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
Particle2.prototype.isDead = function(){
  if(this.lifeSpan < 0){
    return true;
  }else{
    return false;
  }
}
