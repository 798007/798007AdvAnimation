//Vehicle contructor function
function Vehicle(loc){
  this.loc = new JSVector(loc.x, loc.y);
  let dx = Math.random()*4-2;
  let dy = Math.random()*4-2;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0);
  this.desiredSep = 30; //desired separation between vehicles
  this.neighborDist = 150;
  //this.scl = 3;
  this.clr = "rgba(180,0,220,.8)";
  this.maxSpeed = document.getElementById("slider2").value;
  this.maxForce = document.getElementById("slider1").value;
}

//placing method in the prototype
Vehicle.prototype.run = function(vehicles){
  this.flock(vehicles);
  this.update();
  this.checkEdges();
  this.render();
}

Vehicle.prototype.update = function(){
  if(!game.gamePaused){
    this.vel.add(this.acc);
    this.vel.limit(game.slider2.value);
    this.loc.add(this.vel);
  }
}

Vehicle.prototype.checkEdges = function(){
  let cnv = game.canvas;
  if (this.loc.x > cnv.width){
    this.loc.x = 0;
  }
  else if(this.loc.x < 0){
    this.loc.x = cnv.width;
  }
  if(this.loc.y > cnv.height){
    this.loc.y = 0;
  }
  else if(this.loc.y < 0){
    this.loc.y = cnv.height;
  }
}

Vehicle.prototype.render = function(){
  let ctx = game.ctx;
  ctx.strokeStyle = this.clr;
  ctx.fillStyle = this.clr;
  ctx.save();
  ctx.beginPath();
  ctx.translate(this.loc.x, this.loc.y);
  ctx.rotate(this.vel.getDirection()-Math.PI/2);
  ctx.moveTo(-10, -15);
  //ctx.lineTo(0, -5);
  ctx.lineTo(10, -15);
  ctx.lineTo(0, 0);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

Vehicle.prototype.flock = function(vehicles){
  //flock force is the accumulation of all forces
  let flockForce =   new JSVector(0,0);
  //set up force vectors to be added to acc
  let sep = this.separate(vehicles);
  let ali = this.align(vehicles);
  let coh = this.cohesion(vehicles);
  //set multiples via sliders
  let sepMult = document.getElementById("slider3").value;
  let aliMult = document.getElementById("slider4").value;
  let cohMult = document.getElementById("slider5").value;
  //calculate three forces
  sep.multiply(sepMult);
  ali.multiply(aliMult);
  coh.multiply(cohMult);
  //add each of these to flockForce
  flockForce.add(sep);
  flockForce.add(ali);
  flockForce.add(coh);
  let maxForce = document.getElementById("slider1").value;
  flockForce.limit(maxForce);
  this.acc.add(flockForce);
}
//+++++++++++++++++++++++++++++ Flocking functions
Vehicle.prototype.separate = function (v) {
  let separation = new JSVector(0, 0);
  for(var i=0; i<v.length; i++){
    let difference = JSVector.subGetNew(this.loc, v[i].loc);
    let distance = difference.getMagnitude();
    if((distance>0) && (distance<this.desiredSep)){
      difference.normalize();
      separation.add(difference);
    }
  }
  return separation;
}

Vehicle.prototype.align = function (v) {
  let sum = new JSVector(0, 0);
  let count = 0;
  for(var i=0; i<v.length; i++){
    let distance = this.loc.distance(v[i].loc);
    if((distance>0) && (distance<this.neighborDist)){
      sum.add(v[i].vel);
      count++; //this counts the amount of vehicles that are in the desired distance
    }
  }
  if(count>0){
    sum.divide(count);
    sum.normalize();
    sum.multiply(document.getElementById("slider2").value);
    let move = sum.sub(this.vel);
    move.limit(document.getElementById("slider1").value);
    return move;
  }else{
    return new JSVector(0, 0);
  }
}

Vehicle.prototype.cohesion = function (v){
  let sum = new JSVector(0, 0);
  let count = 0;
  for(var i=0; i<v.length; i++){
    let distance = this.loc.distance(v[i].loc);
    if((distance>0) && (distance<this.neighborDist)){
      sum.add(v[i].loc);
      count++; //this counts the amount of vehicles that are in the desired distance
    }
  }
  if(count>0){
    sum.divide(count);
    return this.seek(sum);
  }else{
    return new JSVector(0, 0);
  }
}

Vehicle.prototype.seek = function(target){
  let seek = target.sub(this.loc);
  seek.normalize();
  seek.multiply(document.getElementById("slider2").value);
  let move = seek.sub(this.vel);
  move.limit(document.getElementById("slider1").value);
  return move;
}
