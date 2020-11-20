//Vehicle contructor function
function Vehicle(loc){
  this.loc = new JSVector(loc.x, loc,y);
  let dx = Math.random()*4-2;
  let dy = Math.random()*4-2;
  this.vel = new JSVector(dx, dy);
  this.acc = new JSVector(0, 0);
  this.desiredSep = 10; //desired separation between vehicles
  this.scl = 3;
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
}
