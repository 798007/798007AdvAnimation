class Cell{
  constructor(ecosystem, row, col){
    this.ecosystem = ecosystem;
    this.row = row;
    this.col = col;
    this.ctx1 = ecosystem.context1;
    this.width = ecosystem.cellWidth;
    this.height = ecosystem.cellHeight;
    this.x = col*this.width+this.ecosystem.world.left;
    this.y = row*this.height+this.ecosystem.world.top;
    this.loc = new JSVector(this.x, this.y);
    this.r = Math.random()*50;
    this.g = Math.random()*200+55;
    this.b = Math.random()*200+55;
    this.clr = "rgba(" + this.r + ", " + this.g + "," + this.b +")"
  }//  +++++++++++++++++++++++++++++++++++++++++++++++++++  end Constructor

  run(){
      this.render();
      this.update();
  }

  render(){
    let ctx1 = this.ctx1;
    ctx1.save();
    ctx1.strokeStyle = "rgba(0, 0, 0, 1)";
    ctx1.fillStyle = this.clr;
    ctx1.beginPath();
    ctx1.rect(this.loc.x, this.loc.y, this.width, this.height);
    ctx1.fill();
    ctx1.font = "20px serif";
    ctx1.strokeText("c = "+this.col, this.loc.x+5, this.loc.y+20);
    ctx1.strokeText("r = "+this.row, this.loc.x+5, this.loc.y+50);
    ctx1.stroke();
    ctx1.restore();
  }

  update(){


  }
}//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++  end Class
