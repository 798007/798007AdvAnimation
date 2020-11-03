function Game(){

    this.gamePaused = false;    // the game may be paused or not
    this.ga = new GameArea();   // create all the dom elements
    // get the canvas as a property of the game

    this.canvas = document.getElementById('canvas');
    // get the context
    this.ctx = this.canvas.getContext('2d'); // This is the context

    //   create the array of Mover objects
    this.movers = [];

    //create attractor mover
    this.movers.push(new Mover(Math.random()*this.canvas.width, Math.random()*this.canvas.height, Math.random()*6-3, Math.random()*6-3, 15, "rgba(" + 31 + ", "+ 228 + ","+ 228 +")" ));
    let numMovers = 150;
    for(var i = 1; i < numMovers; i++){
        var x, y, dx, dy, diam, clr, r, g, b;

        x = Math.random()*this.canvas.width;
        y = Math.random()*this.canvas.height;
        dx = Math.random()*6-3;
        dy = Math.random()*6-3;
        diam = 15;//Math.random()*20 + 10;
         r = 255;
         g = 255;
         b = 255;
        clr = "rgba(" + r + ", "+ g + ","+ b +")"
        //clr = "rgba(210, 173, 255,10)"
        this.movers.push(new Mover(x, y, dx, dy, diam, clr)); // add new mover to array
    }



}//++++++++++++++++++++++  end Movers constructor

// function to run the game each animation cycle
Game.prototype.run = function(){
  if(!this.gamePaused){
    for(let i = 0; i < this.movers.length; i++){
      this.movers[i].run();    // run each mover
   }
  }
}
