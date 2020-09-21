function Game(){
  this.ga = new GameArea();
  this.balls = [];
  this.update = function(){
  for(var i=0; i < 100; i++){
    this.balls[i] = new Ball(//parameters)
  }
  this.update = function(){
    for(var i=0; i<balls.length; i++){
      this.balls[i].run();
    }
  }
  }
}
