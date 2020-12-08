function Game(){
    this.gamePaused = false;    // the game may be paused or not
    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    // get the context
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = this.canvas.getContext('2d'); // This is the context
    this.movers = [];
    this.createMovers(this.canvas, 3);

    this.moons = [];
    let numMoons = 4;
    for(var i = 0; i < numMoons; i++){
        var x, y, dx, dy, clr, r, g, b;
        x = Math.random()*this.canvas.width;
        y = Math.random()*this.canvas.height;
        dx = Math.random()*6-3;
        dy = Math.random()*6-3;
        r = 255;
        g = 255;
        b = 255;
        clr = "rgba(" + r + ", "+ g + ","+ b +")"
        this.moons.push(new Moon(x, y, dx, dy, clr));
      }

      this.vehicles = [];
      this.numVehicles = 50;
      for(let i = 0; i < this.numVehicles; i++){
        this.vehicles.push(new Vehicle(new JSVector(Math.random()*this.canvas.width, Math.random()*this.canvas.height)));
      }

      this.snakes = [];
      this.createSnakes(this.canvas, 3);

      // let numSnakes = 3;
      // for(var i = 0; i < numSnakes; i++){
      //   var x, y, dx, dy, clr, r, g, b, numSegments;
      //   x = Math.random()*this.canvas.width;
      //   y = Math.random()*this.canvas.height;
      //   dx = Math.random()*2-1;
      //   dy = Math.random()*2-1;
      //   r = Math.random()*200+55;
      //   g = Math.random()*155;
      //   b = Math.random()*155;
      //   clr = "rgba(" + r + ", " + g + "," + b +")"
      //   numSegments = 15;
      //   this.snakes.push(new Snake(x, y, dx, dy, clr, numSegments));
      // }
}
// function to run the game each animation cycle
Game.prototype.run = function(){
     if(!this.gamePaused){
     for(let i = 0; i < this.moons.length; i++){
     this.moons[i].run();
    }
    for(let i = 0; i < this.movers.length; i++){
      this.movers[i].run();
    }
    for(let i = 0; i < this.snakes.length; i++){
      this.snakes[i].run();
    }
    for(let i = 0; i < this.numVehicles; i++){
      this.vehicles[i].run(this.vehicles);
    }
  }
}
Game.prototype.createMovers = function(canvas, numMovers){
  for(var i = 0; i<numMovers;i++){
    var x, y, dx, dy, radius, clr, r, g, b, numOrbs;
    radius = 30;
    x = Math.random()*this.canvas.width;
    y = Math.random()*this.canvas.height;
    dx = Math.random()*2-1;
    dy = Math.random()*2-1;
    // r = Math.random()*200+55;
    // g = Math.random()*155;
    // b = Math.random()*155;
    clr = "rgba(8, 146, 208, 1)"
    numOrbs = 40;
    this.movers.push(new Mover(x, y, dx, dy, radius, clr, numOrbs));
  }
}

Game.prototype.createSnakes = function(canvas, numSnakes){
  for(var i = 0; i < numSnakes; i++){
    var x, y, dx, dy, r, g, b, clr, numSegments;
    x = Math.random()*this.canvas.width;
    y = Math.random()*this.canvas.height;
    dx = Math.random()*2-1;
    dy = Math.random()*2-1;
    r = Math.random()*200+55;
    g = Math.random()*155;
    b = Math.random()*155;
    clr = "rgba(" + r + ", " + g + "," + b +")"
    numSegments = 15;
    this.snakes.push(new Snake(x, y, dx, dy, clr, numSegments));
  }
}
