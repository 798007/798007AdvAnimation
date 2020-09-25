function GameArea(){
    //  Wrapper Div
    this.wrapperDiv = document.getElementById("wrapperDiv");
    //this.wrapperDiv.setAttribute("style", " background-color: yellow; border: solid black 5 px; width:900px; height:800px");
    //tileMenuDiv
    var tileMenu = document.getElementbyId('tileMenuDiv');

    //create tileMenuDiv
    this.tileMenuDiv = document.createElement("div");
    this.wrapperDiv.appendChild(this.tileMenuDiv);
    this.tileMenuDiv.setAttribute("style", "background-color: white; width:900px; height:100px; float:right");
    this.tiles = [];



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
