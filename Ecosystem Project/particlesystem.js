function ParticleSystem(x, y){
  this.particles = [];
  this.emit = new JSVector(x, y);
}

ParticleSystem.prototype.run = function(x, y){
  this.addParticle();
  this.update(x, y);
}

ParticleSystem.prototype.addParticle = function(){
  let rad = 5;
  let particleClr = "rgba(34, 235, 232)";
  this.particles.push(new Particle(this.emit.x, this.emit.y, rad, particleClr));
}

ParticleSystem.prototype.update = function(x, y){
  for(let i = this.particles.length-1; i >= 0; i--){
    let p = this.particles[i];
    this.emit = new JSVector(x, y);
    p.run();
    if(p.isDead() == true){
      this.particles.splice(i, 1);
    }
  }
}
