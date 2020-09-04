window.onload = init;
var canvas;  //  This variable will hold a reference to the Canvas
var ctx;     //  ctx will hold a reference to our context

function init(){
  //get the canvas
  canvas= document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,44,55, .5)';

}

function draw() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos > 350) {
      pos = 0;
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}


function animate(){
 requestAnimationFrame(animate);
 ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
}
