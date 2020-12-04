function SnakeHead(x, y, dx, dy, rad, clr){
  this.loc = new JSVector(x, y);
  this.vel = new JSVector(dx, dy);
  this.radius = rad;
  this.clr = clr;
}

SnakeHead.prototype.run = function(){
  this.checkEdges();
  this.update();
}

SnakeHead.prototype.update = function(){
  if(!game.gamePaused){
    this.loc.add(this.vel);
  }
}

SnakeHead.prototype.checkEdges = function(){
  let cnv = game.canvas;
  if(this.loc.x > cnv.width || this.loc.x < 0){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y > cnv.height || this.loc.y < 0){
    this.vel.y = -this.vel.y;
  }
}
