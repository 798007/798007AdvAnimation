var canvas;
var ctx;
var ballArr = [];

//  intialize the Canvas and context
window.onload = init;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'black';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  //loadBalls(100);
  //animate();
  GameArea();
}

function GameArea(){
    //  Wrapper Div
    this.wrapperDiv = document.getElementById("wrapperDiv");
    this.wrapperDiv.setAttribute("style",
                                 " background-color: yellow;
                                   border: solid black 5 px;
                                   width:900px;
                                   height:800px;");
    // create tileMenuDiv
    this.tileMenuDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.tileMenuDiv);
    this.tileMenuDiv.setAttribute("style",
                                  "background-color: white;
                                    width:900px;
                                    height:100px;
                                    float:left");


for(let i = 0; i < this.tiles.length; i++){
    this.tiles[i].addEventListener('mouseover', // mouseover is the name of an event
                                   function(){//  JavaScript has anonymous functions
                                   //  'this' is the listener target object: tile
                                   //  'this' does not refer to the PlayArea object
                                  this.style.backgroundColor = "#ac8fe3"
                                  },
                                  false);

    this.tiles[i].addEventListener('mouseout', function(){
        this.style.backgroundColor = "#d5dee0"
    },false);

    this.tiles[i].addEventListener('click', function(){
        game.gamePaused = !game.gamePaused;
        console.log("Mouse Clicked");
    },false);
                                        }

// Defining custom functions
  function funOne() {
      console.log("The first function executed successfully!");
  }

  function funTwo() {
      console.log("The second function executed successfully");
  }

// Selecting DOM element
// var btn = document.getElementById("myBtn");
//
// // Assigning event listeners to the DOM element
// btn.addEventListener("click", funOne, false);
// btn.addEventListener("click", funTwo, false);


// function Ball(x, y, dx, dy, radius, color){
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   var red = Math.floor(Math.random()*255);
//   var green = Math.floor(Math.random()*255);
//   var blue = Math.floor(Math.random()*255);
//   this.color = 'rgba('+red+', '+green+', '+blue+')';
// }
//
// //this function moves the ball and keeps it on the screen
// Ball.prototype.update = function(){
//   this.x += this.dx;
//   this.y += this.dy;
//   if(this.x > canvas.width || this.x < 0) this.dx = -this.dx;
//   if(this.y > canvas.height || this.y < 0) this.dy = -this.dy;
//   this.render();
// }
//
// //this function draws the ball
// Ball.prototype.render = function(){
//   ctx.strokeStyle = this.color;
//   ctx.fillStyle = this.color;
//   ctx.beginPath();
//   ctx.arc(this.x,this.y,this.radius, Math.PI*2, 0, false);
//   ctx.fill();
//   ctx.stroke();
// }
//
// //animates every ball object that is loaded into the ball array
// function animate(){
//   ctx.clearRect(0,0,canvas.width, canvas.height);
//   for(var i = 0; i < ballArr.length; i++){
//     ballArr[i].update();
//   }
//   requestAnimationFrame(animate);
// }
//
// //loads ball objects into an array - the parameter number is the amount of ball objects that get loaded into the array
// function loadBalls(number){
//   for(var i=0; i < number; i++){
//     var x = Math.random()*window.innerWidth;
//     var y= Math.random()*window.innerHeight;
//     var dx = Math.random()*10 - 5;
//     var dy = Math.random()*10 - 5;
//     var radius = 15;
//     ballArr[i] = new Ball(x, y, dx, dy, radius);
//   }
// }
//
//
