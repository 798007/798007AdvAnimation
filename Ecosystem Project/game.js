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
    let numMoons = 10;
    for(var i = 0; i < numMoons; i++){
        var x, y, dx, dy, clr, r, g, b;
        x = Math.random()*(this.canvas.width - 40) + 20;
        y = Math.random()*(this.canvas.height - 40) + 20;
        dx = Math.random()*6-3;
        dy = Math.random()*6-3;
        r = 255;
        g = 255;
        b = 255;
        clr = "rgba(" + r + ", "+ g + ","+ b +")"
        this.moons.push(new Moon(x, y, dx, dy, clr));
      }

      this.vehicles = [];
      this.numVehicles = 20;
      for(let i = 0; i < this.numVehicles; i++){
        this.vehicles.push(new Vehicle(new JSVector(Math.random()*this.canvas.width, Math.random()*this.canvas.height)));
      }

      this.snakes = [];
      this.createSnakes(this.canvas, 1);

      function createParticle(){
        for(let i = 0; i < game.snakes.length; i++){
          game.snakes[i].addParticle();
        }
      }
        setInterval(createParticle,200);     // use a timer to create 5 particles per second
}
// function to run the game each animation cycle
Game.prototype.run = function(){
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
Game.prototype.createMovers = function(canvas, numMovers){
  for(var i = 0; i<numMovers;i++){
    var x, y, dx, dy, radius, clr, r, g, b, numOrbs;
    radius = 30;
    x = Math.random()*this.canvas.width;
    y = Math.random()*this.canvas.height;
    dx = Math.random()*6-3;
    dy = Math.random()*6-3;
    // r = Math.random()*200+55;
    // g = Math.random()*155;
    // b = Math.random()*155;
    clr = "rgba(8, 146, 208, 1)"
    numOrbs = 5;
    this.movers.push(new Mover(x, y, dx, dy, radius, clr, numOrbs));
  }
}

Game.prototype.createSnakes = function(canvas, numSnakes){
  for(var i = 0; i < numSnakes; i++){
    var x, y, dx, dy, r, g, b, clr, numSegments;
    x = this.canvas.width/2;
    y = canvas.height/2;
    dx = Math.random()*6-3;
    dy = Math.random()*6-3;
    r = Math.random()*200+55;
    g = Math.random()*155;
    b = Math.random()*155;
    clr = "rgba(" + r + ", " + g + "," + b +")"
    numSegments = 15;
    this.snakes.push(new Snake(x, y, dx, dy, clr, numSegments));
  }
}
