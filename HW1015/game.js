function Game(){
  this.gamePaused = false;
  this.ga = new GameArea();
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');

  this.movers = [];
  let numMovers = 20;
  for(var i = 0; i < numMovers; i++){
    this.movers.push(new Oscillator());
  }
}

Game.prototype.run = function(){
  if(!this.gamePaused){
    for(let i = 0; i < this.movers.length; i++){
      this.movers[i].run();
    }
  }
}
