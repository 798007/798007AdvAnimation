class Tower {
    constructor(game, r, c){
        this.game = game;
        this.r = r;
        this.c = c;
        //this.loc = new JSVector(r, c);
        this.loc = game.grid[r][c].loc;
        this.particles = [];
        //this.distance;
        this.emit = new JSVector(this.loc.x, this.loc.y);

        this.images =[];
        for(var i=0; i<38; i++){
          this.images[i]= new Image();
          this.images[i].src = "TowerPNGSequence/b"+i+".png";
        }
        this.currentImage=0;
        this.someVar=0;

    }

    run() {
        //this.addParticle();
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
      ctx.fillStyle = this.clr;
      let img = this.images[this.currentImage]
      ctx.drawImage(img,this.loc.x, this.loc.y, 50, 50);
      this.someVar++;
      if(this.someVar%2===0){
        this.currentImage++;
      }

      if(this.currentImage>=38){
        this.currentImage=0;
      }

    }

     addParticle(){
       let rad = 4;
       let particleClr = "rgba(34, 235, 232)";
       this.particles.push(new Particle(this.emit.x, this.emit.y, rad, particleClr));
     }
}
