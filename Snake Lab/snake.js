function Snake(x, y, dx, dy, clr, numSegments){
  this.mover = new Mover(x, y, dx, dy, 10, clr);
  this.clr = clr;
  this.segments = [];
  this.numSegments = numSegments;
  //this.velocity = new JSVector(dx, dy);
}

  //create numSegments
  for(let i=0; i<this.numSegments;i++){
  this.segments[i] = new JSVector(x-(10*(i+1)), y-(10*(i+1)));
  }
}

Snake.prototype.run = function(){
  this.mover.run();
  this.update();
  this.render();
}

Snake.prototype.render = function(){
  let ctx = game.ctx;
  for(var i = 0; i < this.numSegments; i++){
    ctx.strokeStyle = this.clr;
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.segments[i].x, this.segments[i].y, 10, Math.PI*2, 0, false);
    ctx.stroke();
    ctx.fill();  
  }


}
