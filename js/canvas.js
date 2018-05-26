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

//Draw all of the tiles for the level background
function drawLevel(level) {
  var startX = initialStartX;
  var startY = initialStartY;
  for (i=0;i<level.length;i++) {
    if (i%10 === 0 && i!=0) {
      startY+=tileSize;
      startX = initialStartX;
    }
    var textureName = getTextureName(level[i],"l");
    var b = new Sprite(textureName);
    b.draw(startX,startY,tileSize,tileSize);
    startX+=tileSize;
  }
}

//Draw the roads for the game
function drawRoads(roads) {
  var startX = initialStartX;
  var startY = initialStartY;
  for (i=0;i<roads.length;i++) {
    if (i%10 === 0 && i!=0) {
      startY+=tileSize;
      startX = initialStartX;
    }
    if (roads[i] !=0){
      var textureName = getTextureName(roads[i],"r");
      var s = new Sprite(textureName);
      s.draw(startX,startY,tileSize,tileSize);
      s.pos=[startX,startY];
    }
    startX+=tileSize;
  }
}

//Draw the buildings for the game
function drawBuildings(buildings) {
  var startX = initialStartX;
  var startY = initialStartY;
  for (i=0;i<buildings.length;i++) {
    if (i%10 === 0 && i!=0) {
      startY+=tileSize;
      startX = initialStartX;
    }
    if (buildings[i] !=0){
      var textureName = getTextureName(buildings[i],"b");
      var s = new Sprite(textureName);
      s.draw(startX,startY-((s.image.height*stretchRatio)-tileSize),tileSize,s.image.height*stretchRatio);
      s.pos=[startX,startY];
    }
    startX+=tileSize;
  }
}

//Draw the power buildings for the game
function drawPower(power) {
  var startX = initialStartX;
  var startY = initialStartY;
  for (i=0;i<power.length;i++) {
    if (i%10 === 0 && i!=0) {
      startY+=tileSize;
      startX = initialStartX;
    }
    if (power[i] !=0){
      var textureName = getTextureName(power[i],"p");
      var s = new Sprite(textureName);
      s.draw(startX,startY-((s.image.height*stretchRatio)-tileSize),tileSize,s.image.height*stretchRatio);
      s.pos=[startX,startY];
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
          return "sprites/roads/roadX";
          break;
        case 2:
          return "sprites/roads/roadY";
          break;
        case 3:
          return "sprites/roads/road4Way";
          break;
        case 4:
          return "sprites/roads/road3Way";
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
