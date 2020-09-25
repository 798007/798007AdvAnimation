 var tiles = [];
 var buttons = [];


function GameArea(){
    //  Wrapper Div
    this.wrapperDiv = document.getElementById("wrapperDiv");
    //this.wrapperDiv.setAttribute("style", " background-color: yellow; border: solid black 5 px; width:900px; height:800px");

    //create tileMenuDiv
    this.tileMenuDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.tileMenuDiv);
    //this.tileMenuDiv.setAttribute("style", "background-color: white; width:900px; height:100px; float:right");
    this.tileMenuDiv.id='tileMenuDiv';

    //create buttonMenuDiv
     this.buttonMenuDiv = document.createElement("div");
     this.wrapperDiv.appendChild(this.buttonMenuDiv);
     this.buttonMenuDiv.id='buttonMenuDiv';

    cnv=document.getElementById("cnv");
    this.wrapperDiv.appendChild(cnv);
    cnv.setAttribute("style", "height: 600px; width: 400px; background-color: black; position: relative; left: 100px;");

    //4 tiles
    for(var i = 0; i < 4; i++){
      tiles[i] = this.tileDiv = document.createElement("div");
      this.tileMenuDiv.appendChild(tiles[i]);
      tiles[i].setAttribute("style", "float:right; padding:30px; width:30px; height:30px; margin-left: 50px; margin-right: 50px; margin-top: 25px; margin-bottom: 25px; background-color: purple; border-radius: 100%; border: solid black 2px;");
    }

    for(var i = 0; i < 4; i++){
      buttons[i] = this.buttonDiv = document.createElement("div");
      this.buttonMenuDiv.appendChild(buttons[i]);
      buttons[i].setAttribute("style", "height: 100px; width: 100px; background-color: powderblue; margin-left: 60px; margin-right: 60px; margin-top: 50px; float: left");
    }






    //4 tiles divs
    // for(var i = 0; i<4; i++){
    //   tiles[i]=this.tileDiv=document.getElementbyId("tileDiv");
    //   this.wrapperDiv.appendChild(this.tileMenuDiv);
    // }


//class

for(let i = 0; i < 4; i++){
  this.tiles[i] = document.createElement("div");
  this.tileMenuDiv.appendChild(this.tiles[i]);
  this.tiles[i].setAttribute("style", "background-color: #0055ff; width: 100px; height: 80px; float:left");

}







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
}
