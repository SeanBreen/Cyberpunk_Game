//Canvas settings
var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var mouse = [0,0];
canvas.addEventListener("click", click,false);
canvas.addEventListener("mousemove", function(ev) {
    mouse = [ev.clientX,ev.clientY];
});
//Tile size and position of the game grid on screen
var tileSize = 80;
var stretchRatio = tileSize/64;
var initialStartX = (window.innerWidth/2) - ((tileSize*10)/2);
var initialStartY = (window.innerHeight/2) - ((tileSize*10)/2);


//Clear Screen
function clearScreen() {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}

// for (i=0;i<level.length;i++) {
//   level[i] = new Sprite(getTextureName(level[i],"l"));
// }

//Draw all of the tiles for the level background
function drawLevel() {
  var startX = initialStartX;
  var startY = initialStartY;
  for (i=0;i<level.length;i++) {
    if (i%10 === 0 && i!=0) {
      startY+=tileSize;
      startX = initialStartX;
    }

    level[i].draw(startX,startY,tileSize,tileSize);

    if (roads[i] != 0) {
      roads[i].draw(startX,startY,tileSize,tileSize,roads[i].rotation);
      roads[i].pos=[startX,startY];
    }

    if (buildings[i] !=0){
      buildings[i].draw(startX,startY-((buildings[i].image.height*stretchRatio)-tileSize),tileSize,buildings[i].image.height*stretchRatio);
      buildings[i].pos=[startX,startY];
    }

    if (power[i] !=0){
      power[i].draw(startX,startY-((power[i].image.height*stretchRatio)-tileSize),tileSize,power[i].image.height*stretchRatio);
      power[i].pos=[startX,startY];
    }

    startX+=tileSize;
  }
}

//Returns the texture name from a given integer and texture type (eg. road)
function getTextureName(no,type) {
  //Get the type of texture
  switch(type) {
    case "l":
    case 0:
      //Get the number associated with the specific texture
      switch(no) {
        case 0:
          return "level/tile";
          break;
        case 1:
          return "level/unlocked";
          break;
      }
      break;
    case "r":
    case 1:
      switch(no) {
        case 1:
          return "sprites/roads/roadEnd";
          break;
        case 2:
          return "sprites/roads/roadStraight";
          break;
        case 3:
          return "sprites/roads/road3Way";
          break;
        case 4:
          return "sprites/roads/road4Way";
          break;
        case 5:
          return "sprites/roads/roadCorner";
          break;
      }
      break;
    case "c":
    case 2:
      switch(no) {
        case 1:
          return "sprites/vehicles/tempCar";
          break;
      }
      break;
    case "b":
    case 3:
      switch(no) {
        case 1:
          return "sprites/buildings/houses/low";
          break;
        case 2:
          return "sprites/buildings/houses/medium";
          break;
      }
      break;
    case "p":
    case 4:
      switch(no) {
        case 1:
          return "sprites/buildings/power/generator";
          break;
      }
      break;
  }
}
