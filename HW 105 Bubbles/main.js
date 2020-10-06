


var game;   // a single global object

window.onload = init;//  After the window has been loaded, go to init

function init(){
    game = new Game();  // global game
    animate();          // kick off the animation
}

//  animation loop called 60 fps
function animate(){
    // paint the canvas with mostly transparent black
  game.ctx.fillStyle = 'rgba(0,0,0,.05)'
  game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height);
  game.run();    // run the game
  requestAnimationFrame(animate);
}

function loadMovers(numMovers){
  var movers = [];
  for(var i = 0; i < numMovers; i++){
    var x, y, dx, dy, diam, clr, r, g, b;
    x = Math.random()*canvas.width;
    y = Math.random()*canvas.height;
    dx = Math.random()*6-3;
    dy = Math.random()*6-3;
    diam = 15;
    r = 255;
    g = 255;
    b = 255;
    clr = "rgba(" + r + ", " + g + "," + b +")"
    movers[i] = new Mover(x, y, dx, dy, diam, clr);
  }

}
