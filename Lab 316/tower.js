class Tower {
    constructor(game, r, c){
        this.game = game;
        this.r = r;
        this.c = c;
        //this.loc = new JSVector(r, c);
        this.loc = game.grid[r][c].loc;
        this.particles = [];
        this.emit = new JSVector(this.loc.x, this.loc.y);

    }

    run() {
        this.addParticle();
        this.update();
        this.render();
    }

    update(){
      for(let i = this.particles.length-1; i >= 0; i--){
        let p = this.particles[i];
        this.emit = new JSVector(this.loc.x, this.loc.y);
        p.run();
        if(p.isDead() == true){
          this.particles.splice(i, 1); //delete dead particles
        }
      }
    }

    render(){
        let ctx = game.ctx;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(this.loc.x + game.cellWidth/2, this.loc.y+ game.cellHeight/2, 8, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }

    addParticle(){
      let rad = 6;
      let particleClr = "rgba(34, 235, 232)";
      this.particles.push(new Particle(this.emit.x, this.emit.y, rad, particleClr));
    }
}