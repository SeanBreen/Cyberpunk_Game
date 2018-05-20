var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
var tileSize = 80;
var initialStartX = (window.innerWidth/2) - ((tileSize*10)/2);
var initialStartY = (window.innerHeight/2) - ((tileSize*10)/2);
var level = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

var roads = [
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0
];

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

function drawRoads(roads) {
  var startX = 0;
  var startY = 0;
  for (i=0;i<roads.length;i++) {
    if (i%16 === 0 && i!=0) {
      startY+=tileSize;
      startX = 0;
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

function getTextureName(no,type) {
  switch(type) {
    case "l":
      switch(no) {
        case 0:
          return "level/tile";
          break;
        case 1:
          return "";
          break;
      }
      break;
    case "r":
      switch(no) {
        case 1:
          return "roads/roadX";
          break;
        case 2:
          return "roads/roadY";
          break;
        case 3:
          return "roads/road4Way";
          break;
      }
      break;
  }
}
