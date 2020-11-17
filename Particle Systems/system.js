function ParticleSystem(x, y){
  this.particles = [];
  this.emit = new JSVector(x, y);
}

ParticleSystem.prototype.run = function(){
  this.addParticle();
  this.update();
}

ParticleSystem.prototype.update = function(){
  for(let i = this.particles.length-1; i >= 0; i--){
    let p = this.particles[i];
    p.run();
    if(p.isDead() == true){
      this.particles.splice(i, 1);
    }
  }
}

ParticleSystem.prototype.addParticle = function(){
  let rad = 10;
  let clr = "rbga(34, 235, 232)";
  this.particles.push(new Particle(this.emit.x, this.emit.y, rad, clr));
}
