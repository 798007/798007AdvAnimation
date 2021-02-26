function Game(){

    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
    this.canvas = document.getElementById('canvas');
    // get the context
    this.canvasLoc = new JSVector();
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
            if(Math.random() < 0.2){
              this.grid[r][c] = new Cell(this, r, c, true);
            }else{
              this.grid[r][c] = new Cell(this, r, c, false);
            }
        }
    }
    this.arrayLoaded = true;

    this.loadAllNeighbors();

    this.canvas.addEventListener("click", function(event){
      let r = Math.floor((event.offsetY+game.canvasLoc.y)/game.cellHeight);
      let c = Math.floor((event.offsetX+game.canvasLoc.x)/game.cellWidth);
      if((c>=0 && c<game.numCols) && (r>=0 && r<game.numRows)){
        game.grid[r][c].occupied = !game.grid[r][c].occupied;
        game.loadAllNeighbors();
      }
    });

    this.brushFire();

    // Create actors
    // Additional actors may be created periodically.
    this.actors = [];
    for(let i=0; i<5; i++){
      let r = Math.floor(Math.random()*(this.numRows-1));
      let c = Math.floor(Math.random()*(this.numCols-1));
      let cell = this.grid[r][c];
      this.actors.push(new Actor(this, cell));
    }


}//++++++++++++++++++++++  end Game constructor

// function to run the game each animation cycle
Game.prototype.run = function(){
    //this.ctx.fillStyle = "saddlebrown";
    //this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
    for (let r = 0; r < this.grid.length; r++) {
        for (let c = 0; c < this.numCols; c++) {
            this.grid[r][c].run();
        }
    }

    // Show the end cell
    // this.ctx.fillStyle = "brown";
    // this.ctx.font = '18px sans-serif';
    // let endCell = this.path[this.path.length-1];
    // this.ctx.fillText("End", endCell.loc.x + endCell.width/2 - 16,
    //                 endCell.loc.y + endCell.height/2 + 8);

    // run all the actors
    for(let i = 0; i < this.actors.length; i++){
        this.actors[i].run();
    }
}

Game.prototype.brushFire = function(){
  let q = new Array();
  let count = 0;
  let currentCell;
  let endCell = this.grid[this.numRows-1][this.numCols-1];
  endCell.dist = 0;
  q.push(endCell);
  while(q.length>0 && count<2000){
    count++;
    currentCell = q.shift();
    for(let i=0; i<currentCell.neighbors.length; i++){
      if(!currentCell.neighbors[i].parent && !currentCell.neighbors[i].occupied){
        currentCell.neighbors[i].dist=currentCell.dist+10;
        currentCell.neighbors[i].parent=currentCell;
        q.push(currentCell.neighbors[i]);
      }
    }
  }
  endCell.dist = 0;
}

Game.prototype.loadAllNeighbors = function(){
  for(let r=0; r<this.grid.length; r++){
    for(let c=0; c<this.grid[r].length; c++){
      this.grid[r][c].loadNeighbors();
    }
  }
}
