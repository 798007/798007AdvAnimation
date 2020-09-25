var canvas;
var ctx;
var game;
var ballArr = [];

//  intialize the Canvas and context
window.onload = init;

function init(){
  game = new Game();
  //get the canvas
  canvas = document.getElementById('cnv');
  //canvas.width = 900;
  //canvas.height = 600;
  // canvas.style.border = 'solid black 2px';
  // canvas.style.backgroundColor = 'black';
  // canvas.style.float = 'left';

  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  //loadBalls(100);
  animate();
  //GameArea();
}

function animate(){
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  //game.update();
  requestAnimationFrame(animate);
}





// Selecting DOM element
// var btn = document.getElementById("myBtn");
//
// // Assigning event listeners to the DOM element
// btn.addEventListener("click", funOne, false);
// btn.addEventListener("click", funTwo, false);
