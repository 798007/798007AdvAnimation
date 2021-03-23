class Tower {
    constructor(game, r, c){
        this.game = game;
        this.r = r;
        this.c = c;
        this.loc = game.grid[r][c].loc;
        //this.loc = new JSVector(x, y);


        // start off the actor in the first cell of the path
        // this.pathIndex = 0;
        // this.currentCell = game.path[this.pathIndex];
        // this.nextCell = game.path[this.pathIndex+1];   // next in the path of cells
        // // where this actor should aim -- the center of the next cell in the path
        // this.target = new JSVector(this.nextCell.loc.x + this.nextCell.width/2,
        //                     this.nextCell.loc.y + this.nextCell.height/2);
        // this.lastCell = game.path[game.path.length-1];  // end of the path
        // // position the actor initially in the center of the first cell
        // this.loc = new JSVector(this.currentCell.loc.x + this.currentCell.width/2,
        //                         this.currentCell.loc.y + this.currentCell.height/2);

    }

    run() {
        //this.update();
        this.render();
    }

    render(){
        let ctx = game.ctx;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.loc.x, this.loc.y, 8, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }
}






// function Tower(x, y, clr){
//   this.location = new JSVector(x, y)
//   this.clr = clr;
//   this.particleSystem = new ParticleSystem(this.location.x, this.location.y);
// }
//
// Tower.prototype.run = function(){
//   this.particlesystem.run(this.location.x, this.location.y);
//   this.render();
// }
//
// Tower.prototype.render = function(){
//   let ctx = game.ctx;
//   ctx.strokeStyle = this.clr;
//   ctx.fillStyle = this.clr;
//   ctx.save();
//   ctx.beginPath();
//   ctx.moveTo(10, 0);
//   ctx.lineTo(-10, -5);
//   ctx.lineTo(-10, 5);
//   ctx.closePath();
//   // ctx.arc(this.segments[i].x, this.segments[i].y, this.rad, Math.PI*2, 0, false);
//   ctx.stroke();
//   ctx.fill();
//   ctx.restore();
// }
//
// Tower.prototype.addParticle = function(){
//   this.particleSystem.addParticle();
// }
