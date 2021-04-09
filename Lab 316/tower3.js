class Tower3 {
    constructor(game, r, c){
        this.game = game;
        this.r = r;
        this.c = c;
        //this.loc = new JSVector(r, c);
        this.loc = game.grid[r][c].loc;
        this.particles3 = [];
        this.emit = new JSVector(this.loc.x, this.loc.y);

    }

    run() {
        //this.addParticle();
        this.update();
        this.render();
    }

    update(){
      for(let i = this.particles3.length-1; i >= 0; i--){
        let p = this.particles3[i];
        this.emit = new JSVector(this.loc.x, this.loc.y);
        p.run();
        if(p.isDead() == true){
          this.particles3.splice(i, 1); //delete dead particles
        }
      }
    }

    render(){
        let ctx = game.ctx;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "powderblue";
        ctx.beginPath();
        ctx.arc(this.loc.x + game.cellWidth/2, this.loc.y+ game.cellHeight/2, 12, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }

    addParticle(){
      let rad = 4;
      let particleClr = "black";
      this.particles3.push(new Particle3(this.emit.x, this.emit.y, rad, particleClr));
    }
}
