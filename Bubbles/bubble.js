//  Bubble constructor function +++++++++++++++++++++++++++++
function Bubble(x, y, dx, dy, rad, clr){
    this.location = new JSVector(x, y);
    this.velocity = new JSVector(dx, dy);

    this.rad = rad;///2;
    this.clr = clr;
    this.isOverlapping = false;
}

  //  placing methods in the prototype (every bubble shares functions)
Bubble.prototype.run = function(){
    this.checkEdges();
    this.checkOverlapping()
    this.update();
    this.render();
  }

// check if this bubble is overlapping any other bubble
Bubble.prototype.checkOverlapping = function(){
    this.isOverlapping = false;//  default color
    this.clr =  "rgba(255,255,255,255)"
    let b = game.bubbles;
    for(let i = 0; i < b.length; i++){ // for all the bubbles
       if(this !== b[i]){   // if not this bubble
         let d = this.location.distance(b[i].location);
         //Math.sqrt((this.x-b[i].x)*(this.x-b[i].x) + (this.y-b[i].y)*(this.y-b[i].y));
         if(d < this.rad + b[i].rad){
            this.isOverlapping = true;
            this.clr =  "rgba(210, 173, 255,10)"
         }
       }
    }

  }

// draw the bubble on the canvas
Bubble.prototype.render = function(){
    let ctx = game.ctx;
    // color depends on whether this bubble overlaps any oher bubble
    if(this.isOverlapping){
        ctx.strokeStyle = "rgba(255,255,255,255)"//this.clr;
        ctx.fillStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.location.x,this.location.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
        ctx.fill();
    }else{
        ctx.strokeStyle = this.clr;
        ctx.beginPath();
        ctx.arc(this.location.x,this.location.y, this.rad, Math.PI*2, 0, false);
        ctx.stroke();
    }

  }

// Move the bubble in a random direction
Bubble.prototype.update = function(){
    if(!game.gamePaused){
      //location.add(velocity);
      this.velocity.x = Math.random()*6-3;
      this.velocity.y = Math.random()*6-3;
      this.location.add(this.velocity);
      //   x += this.velocity.dx;
      // this.location.y += this.dy;
    }
  }

// When a bubble hits an edge of the canvas, it wraps around to the opposite edge.
Bubble.prototype.checkEdges = function(){
    let canvas = game.canvas;
    if(this.location.x > canvas.width)  this.location.x = 0; // wrap around from right to left
    if(this.location.x < 0)  this.location.x = canvas.width; // wrap around from left to right
    if(this.location.y > canvas.height)  this.location.y = 0; // wrap around from bottom to top
    if(this.location.y < 0)  this.location.y = canvas.height; // wrap around from top to bottom
  }
