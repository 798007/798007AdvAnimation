var canvas;
var ctx;
var game;
//var ballArr = [];

//  intialize the Canvas and context
window.onload = init;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'black';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game()
  //loadBalls(100);
  animate();
  //GameArea();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  game.update();
}



// Selecting DOM element
// var btn = document.getElementById("myBtn");
//
// // Assigning event listeners to the DOM element
// btn.addEventListener("click", funOne, false);
// btn.addEventListener("click", funTwo, false);
