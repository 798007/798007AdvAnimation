// Actor class.  Each actor starts life at the beginning of a path
// and follows that path to the end where it dies.

class Actor {
    constructor(game, cell){
        this.game = game;
        this.currentCell = cell;
        // position the actor initially in the center of the first cell
        this.loc = new JSVector(this.currentCell.loc.x + this.currentCell.width/2,
                                this.currentCell.loc.y + this.currentCell.height/2);
        this.nextCell = this.currentCell;   // next in the path of cells
        // where this actor should aim -- the center of the next cell in the path
        this.target = new JSVector(this.nextCell.loc.x + this.nextCell.width/2,
                            this.nextCell.loc.y + this.nextCell.height/2);
        this.lastCell = game.grid[game.numRows-1][game.numCols-1];  // end of the path
        // position the actor initially in the center of the first cell
        this.vel = new JSVector(0,0);   // velocity
        this.acc = new JSVector(0, 0);
        this.maxSpeed = 1;
    }

    run() {
        this.update();
        this.render();
    }

    update(){
        // move this actor along the path until it reaches the end of
        // the path
        if(this.currentCell!=this.lastCell){
          this.findNextCell();
          let dist = this.loc.distance(this.target);
          this.acc = JSVector.subGetNew(this.target, this.loc);
          this.acc.limit(0.08);
          this.vel.add(this.acc);
          this.vel.limit(this.maxSpeed);
          this.loc.add(this.vel);

          if(dist<=25){
            this.currentCell = this.nextCell;
            this.findNextCell();
          }
        }
          if(this.currentCell == this.lastCell){
            this.loc = this.lastCell.center;
            this.lastCell.clr = "yellow"
          }
          
    }

    render(){
        let ctx = game.ctx;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.loc.x, this.loc.y, 6, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }

    findNextCell(){
      for(let i=0; i<this.currentCell.neighbors.length; i++){
        if(this.currentCell.neighbors[i].dist<this.nextCell.dist){
          this.nextCell = this.currentCell.neighbors[i];
          this.target = new JSVector(this.nextCell.loc.x + this.nextCell.width/2, this.nextCell.loc.y + this.nextCell.height/2);
        }
      }
    }
}
