function Game(){
    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    this.canvasLoc = new JSVector();
    // get the context
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    this.ctx = this.canvas.getContext('2d'); // This is the context

    //  set number of cells in grid
    this.numCols = 20;
    this.cellWidth = this.canvas.width / this.numCols;
    this.numRows = 13;
    this.cellHeight = this.canvas.height / this.numRows;


    // Create the two-dimensional grid of cells
    this.grid = new Array(this.numRows);
    // Populate the grid of cells
    for (let r = 0; r < this.grid.length; r++) {
        this.grid[r] = new Array(this.numCols);
        for (let c = 0; c < this.grid[r].length; c++) {
            this.grid[r][c] = new Cell(this, r, c, false);
        }
    }

    //create an array of towers
    this.towers = [];

    this.canvas.addEventListener("click", function(event){
        let r = Math.floor((event.offsetY)/game.cellHeight);
        let c = Math.floor((event.offsetX)/game.cellWidth);
        if(!game.grid[r][c].occupied){
            let n = Math.random() * 10;
            if(n < 6){
              game.towers.push(new Tower(game, r, c));
            }else{
              game.towers.push(new Tower2(game, r, c));
            }
        }
        //this.towers.push(new Tower(this, r, c));
        game.grid[r][c].occupied = !game.grid[r][c].occupied;
    });

    // Create a path for the actors to follow.
    // The path is an array of cells as specified in a separate file.
    this.path = [];
    for(let c = 0; c < pathCells.length; c++){
        let cell = this.grid[pathCells[c][0]][pathCells[c][1]];
        cell.isPath = true;
        this.path.push(cell);
    }

    // Create an actor to follow the path.
    // Additional actors may be created periodically.
    this.actors = [];
    this.actors.push(new Actor(this));  // one actor initially

    setInterval(this.createParticle,500);     // use a timer to create 2 particles per second
    //setInterval(this.createParticle2,1000);
    setInterval(this.addActor, 5000);

}//++++++++++++++++++++++  end Game constructor

// function to run the game each animation cycle
Game.prototype.run = function(){
    this.ctx.fillStyle = "saddlebrown";
    this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
    for (let r = 0; r < this.grid.length; r++) {
        for (let c = 0; c < this.numCols; c++) {
            this.grid[r][c].run();
        }
    }
    // Show the end cell
    this.ctx.fillStyle = "brown";
    this.ctx.font = '18px sans-serif';
    let endCell = this.path[this.path.length-1];
    this.ctx.fillText("End", endCell.loc.x + endCell.width/2 - 16,
                    endCell.loc.y + endCell.height/2 + 8);

    // run all the actors
    for(let i = 0; i < this.actors.length; i++){
        this.actors[i].run();
    }

    for(let i = 0; i < this.towers.length; i++){
         this.towers[i].run();
     }
}

//adds Particles with timer
Game.prototype.createParticle = function(){
  for(let i = 0; i < game.towers.length; i++){
        game.towers[i].addParticle();
      }
    }
      //setInterval(createParticle,200);     // use a timer to create 5 particles per second

// Game.prototype.createParticle2 = function(){
//   for(let i = 0; i < game.towers.length; i++){
//         game.towers[i].addParticle2();
//       }
//     }

Game.prototype.addActor = function(){
  game.actors.push(new Actor(game));
}
